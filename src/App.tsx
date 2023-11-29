import "./App.css";
import Board from "./components/Board";
import { useEffect, useRef, useState } from "react";
import Stats from "./components/Modals/Stats";
import Information from "./components/Modals/Information";
import { ProgressGameStatus, ProgressGameType } from "./types";
import { countDownTime, generateWordNotUsed } from "./utlis";
import { WordleContext } from "./context";

const wordsUsed: string[] = []



const App = () => {
  const [word, setWord] = useState("");
  const [userWord, setUserWord] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [progressGame, setProgressGame] = useState<ProgressGameType>({
    wins: 0,
    lose: 0,
    time: 0,
    status: ProgressGameStatus.EMPTY,
    wasWinner: false,
  });
  const [isOpenModalInformation, setIsOpenModalInformation] = useState(true);
  const [isOpenModalStats2, setIsOpenModalStats] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [completedRows, setCompletedRows] = useState<number[]>([]);
  const [tried, setTried] = useState(0);
  const [timer, setTimer] = useState(countDownTime);
  const interval = useRef<any>();
  const isOpenModalStats = useRef(false);

  const concatWord = (char: string) => {
    if (userWord.length === 5) return;
    setUserWord(userWord.concat(char));
  };

  const openModalInformation = () => {
    setIsOpenModalInformation(true);
  };

  const openModalStats = () => {
    isOpenModalStats.current = true;
    setIsOpenModalStats(true);
  };
  const tryGuess = () => {
    if (tried === 5 && userWord !== word) {
      setProgressGame((value) => {
        return {
          wins: value.wins,
          lose: value.lose + 1,
          time: 0,
          status: ProgressGameStatus.FINISHED,
          wasWinner: false,
        };
      });
      isOpenModalStats.current = true;
      setIsOpenModalStats(true);
      return;
    }
    if (userWord.length < 5) return;
    if (userWord === word) {
      setProgressGame((value) => {
        return {
          wins: value.wins + 1,
          lose: value.lose,
          time: 0,
          status: ProgressGameStatus.FINISHED,
          wasWinner: true,
        };
      });
      isOpenModalStats.current = true;
      setIsOpenModalStats(true);
      return;
    }

    setTried(tried + 1);
    setCompletedRows([...completedRows, tried]);
    setUserWord("");
  };

  const deleteChar = () => {
    setUserWord(userWord.slice(0, userWord.length - 1));
  };

  const startNewGame = () => {
    setTimer(countDownTime);
    setProgressGame((value) => {
      return {
        wins: value.wins,
        lose: value.lose,
        time: 0,
        status: ProgressGameStatus.IN_PROGRESS,
        wasWinner: false,
      };
    });
  };

  useEffect(() => {
    const handleTimer = () => {
      interval.current = setInterval(() => {
        setTimer((count) => count - 1);
      }, 1000);
    };

    if (timer <= 0 && interval.current) {
      setProgressGame((value) => {
        return {
          wins: value.wins,
          lose:
            value.status === ProgressGameStatus.FINISHED
              ? value.lose
              : value.lose + 1,
          time: timer,
          status: ProgressGameStatus.EMPTY,
          wasWinner: false,
        };
      });
      setIsOpenModalStats(false);
      setTimer(countDownTime);
    }

    if (isOpenModalStats.current) {
      setProgressGame((value) => {
        return {
          wins: value.wins,
          lose: value.lose,
          time: timer,
          status: value.status,
          wasWinner: false,
        };
      });
    }

    if (!isOpenModalInformation && isFirstTime) {
      handleTimer();
      setIsFirstTime(false);
    }
  }, [timer, isOpenModalInformation]);

  useEffect(() => {
    if (progressGame.status === ProgressGameStatus.EMPTY) {
      setTried(0);
      setUserWord("");
      setCompletedRows([]);
      startNewGame();
      const newWord = generateWordNotUsed(wordsUsed).toUpperCase();
      setWord(newWord);
      wordsUsed.push(newWord);
    }
  }, [progressGame]);

  return (
    <WordleContext.Provider
      value={{
        concatWord,
        tryGuess,
        completedRows,
        tried,
        word,
        userWord,
        deleteChar,
        progressGame,
        darkMode,
      }}
    >
      {isOpenModalStats2 ? (
        <Stats
          onClose={() => {
            isOpenModalStats.current = false;
            setIsOpenModalStats(false);
          }}
        />
      ) : null}

      {isOpenModalInformation ? (
        <Information
          onClose={() => {
            setIsOpenModalInformation(false);
            if (progressGame.status === ProgressGameStatus.EMPTY) {
              startNewGame();
            }
          }}
        />
      ) : null}
      <div className="flex justify-center ">
        <Board
          openModalInformation={openModalInformation}
          openModalStats={openModalStats}
          changeMode={() => {
            setDarkMode(!darkMode);
            if (!darkMode) {
              document.querySelector("html")?.classList.add("dark");
            } else {
              document.querySelector("html")?.classList.remove("dark");
            }
          }}
        />
      </div>
    </WordleContext.Provider>
  );
};

export default App;
