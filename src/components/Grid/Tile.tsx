import { useContext, useEffect, useState } from "react";
import { ProgressGameStatus, TileProps } from "../../types";
import { WordleContext } from "../../context";

const Tile = ({ id, rowId }: TileProps) => {
  const [letter, setLetter] = useState("");
  const [completed, setCompleted] = useState(false);
  const { userWord, word, tried, completedRows, progressGame, darkMode } =
    useContext(WordleContext);
  const [colors, setColor] = useState({ back: "white", font: "black" });

  const style = {
    backgroundColor: colors.back,
    color: colors.font,
  };

  const changeColors = () => {
    const arrayWord = word.split("");
    if (arrayWord.includes(letter)) {
      if (arrayWord[id] === letter) {
        return setColor({ back: "#66A060", font: "white" });
      }
      return setColor({ back: "#CEB02C", font: "white" });
    }
    return setColor({
      back: darkMode ? "rgb(71 85 105)" : "#939B9F",
      font: "white",
    });
  };

  useEffect(() => {
    if (tried === rowId) {
      setLetter(userWord[id]);
    }
    if (completedRows.includes(rowId as number) && !completed) {
      changeColors();
      setCompleted(true);
    }
  }, [userWord, completedRows]);

  useEffect(() => {
    if (progressGame.status === ProgressGameStatus.EMPTY) {
      setLetter("");
      setColor({ back: "white", font: "black" });
      setCompleted(false);
    }

    if (progressGame.status === ProgressGameStatus.FINISHED) {
      changeColors();
    }
  }, [progressGame]);

  useEffect(() => {
    if (colors.back !== "white") {
      changeColors();
    }
  }, [darkMode]);

  return (
    <div
      className="flex justify-center my-[2px] m-[2px] items-center  w-[50px] h-[50px] border-2"
      style={style}
    >
      <p className="flex self-center mb-2 font-bold text-4xl">{letter}</p>
    </div>
  );
};

export default Tile;
