import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import Grid from "./Grid/Grid";
import Keyboard from "./Keyboard/Keyboard";

type BoardProps = {
  openModalInformation: () => void;
  openModalStats: () => void;
  changeMode: () => void;
};

const Board = ({
  openModalInformation,
  openModalStats,
  changeMode,
}: BoardProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[700px] p-5 dark:text-white	dark:bg-slate-800">
      <div
        className="flex justify-around items-center border-2 rounded-lg"
        style={{ width: "100%" }}
      >
        <FontAwesomeIcon
          icon={faQuestionCircle}
          onClick={openModalInformation}
          style={{ cursor: "pointer" }}
        />
        <h1 className="font-extrabold text-5xl m-4">WORDLE</h1>
        <FontAwesomeIcon
          icon={faSquarePollVertical}
          onClick={openModalStats}
          style={{ cursor: "pointer" }}
        />
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            onChange={changeMode}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <Grid />
      <Keyboard />
    </div>
  );
};

export default Board;
