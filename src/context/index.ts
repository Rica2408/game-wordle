import { createContext } from "react";

export const WordleContext = createContext({
    concatWord: (char: string) => {},
    tryGuess: () => {},
    completedRows: [1],
    tried: 0,
    word: "",
    userWord: "",
    deleteChar: () => {},
    progressGame: {
      status: "",
      wins: 0,
      lose: 0,
      time: 0,
      wasWinner: false,
    },
    darkMode: false,
  });