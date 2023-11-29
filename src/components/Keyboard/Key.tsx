import { CSSProperties, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { KeyProps, ProgressGameStatus } from "../../types";
import { WordleContext } from "../../context";

const specialKey = ["ENTER", "DELETE"];
const Key =({ letter }: KeyProps) => {
  const { concatWord, deleteChar, tryGuess, progressGame } =
    useContext(WordleContext);

  const handleSpacialAction = () => {
    if (letter === "ENTER") {
      tryGuess();
    } else {
      deleteChar();
    }
  };

  let style: CSSProperties = {
    width: 65.4,
    height: 50,
    margin: 3,
    borderRadius: 3,
    display: "grid",
    placeItems: "center",
    fontSize: 15,
    fontFamily: "Arial",
    cursor: "pointer",
    border: 0,
    fontWeight: "bold",
  };

  if ((letter === "ENTER" || letter === "DELETE") && progressGame.status === ProgressGameStatus.FINISHED) {
    style = {
      ...style,
      background: "grey"
    }
  }

  if (specialKey.some((char) => char === letter)) {
    return (
      <button
        className="bg-slate-200 dark:bg-slate-600 dark:text-white"
        onClick={() => handleSpacialAction()}
        disabled={(letter === "ENTER" || letter === "DELETE") && progressGame.status === ProgressGameStatus.FINISHED}
        style={style}
      >
        {letter === "ENTER" ? letter : <FontAwesomeIcon icon={faDeleteLeft} />}
      </button>
    );
  }

  return (
    <button
      className="bg-slate-200 dark:bg-slate-600 dark:text-white"
      onClick={() => concatWord(letter)}
      style={{
        width: 48,
        height: 50,
        margin: 3,
        borderRadius: 3,
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        fontFamily: "Arial",
        cursor: "pointer",
        border: 0,
        fontWeight: "bold",
      }}
    >
      {letter}
    </button>
  );
}

export default Key
