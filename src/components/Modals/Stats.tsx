import { useContext } from "react";
import { ProgressGameStatus } from "../../types";
import { WordleContext } from "../../context";

const typography = {
  fontSize: "35px",
};

const typography2 = {
  fontSize: "21px",
};

const typography3 = {
  fontSize: "19px",
};

const typography4 = {
  fontSize: "24px",
};

type StatsProps = {
  onClose: () => void,
};

const Stats = ({ onClose }: StatsProps) => {
  const { progressGame, word } = useContext(WordleContext);
  const convertToTime = (): string=> {
    const leftSeconds = progressGame.time
    const minutes = Math.floor(leftSeconds/60)
    const seconds = leftSeconds % 60
    return `${("0" + minutes).slice(-2)}: ${("0" + seconds).slice(-2)}`
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto">
          <div
            className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline focus:outline-dashed dark:text-white	dark:bg-slate-800"
            style={{ width: "546px", height: "540px" }}
          >
            <div className="flex items-center justify-center p-5">
              <h3 className="font-bold" style={{ fontSize: "35px" }}>
                Estadisticas
              </h3>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="flex flex-row justify-around">
                <div className="flex flex-col items-center">
                  <div style={typography}>
                    {progressGame.lose + progressGame.wins}
                  </div>
                  <h4 style={typography2}>Jugadas</h4>
                </div>
                <div className="flex flex-col items-center">
                  <div style={typography}>{progressGame.wins}</div>
                  <h4 style={typography2}>Ganadas</h4>
                </div>
              </div>
              <div
                className="flex flex-col items-center"
                style={{ marginTop: "50px", marginBottom: "7px" }}
              >
                {progressGame.status === ProgressGameStatus.FINISHED && (
                  <p style={typography3}>
                    La palabra era: <strong>{word}</strong>
                  </p>
                )}
              </div>
              <div className="flex flex-col items-center">
                <h4 style={typography3}>SIGUIETE PALABRA</h4>
                <h4 className="font-bold" style={typography4}>
                  {convertToTime()}
                </h4>
              </div>
            </div>
            <div className="flex items-center justify-center p-6">
              <button
                className=" text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
                style={{
                  background: "#6AAA64",
                  width: "263px",
                  height: "50px",
                }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Stats;
