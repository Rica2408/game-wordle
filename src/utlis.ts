import { dictionary } from "./dictionary";

export const countDownTime = 5 * 60 // mins * 60

export const getRandomWord = (dictionary: string[]): string => {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex];
  };

export const generateWordNotUsed = (wordsUsed: string[]): string => {
    const newWord = getRandomWord(dictionary).toUpperCase()
    if (wordsUsed.includes(newWord)) {
        return generateWordNotUsed(wordsUsed)
    }
    return newWord
}

