import TileExample from "../Grid/TileExample";

type StatsProps = {
  onClose: () => void;
};

const typopgraphy = {
  fontSize: "14px",
  marginBottom: "8px",
};

const example1 = ["G", "A", "T", "O", "S"];
const example2 = ["V", "O", "C", "A", "L"];
const example3 = ["C", "A", "N", "T", "O"];

const Information = ({ onClose }: StatsProps) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline dark:text-white	dark:bg-slate-800"
      >
        <div className="relative w-auto my-6 mx-auto">
          <div
            className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline focus:outline-dashed pl-10 pr-10 dark:text-white	dark:bg-slate-800"
            style={{ width: "546px", height: "90vh" }}
          >
            <div className="flex items-center justify-center pl-5 pr-5 pt-5 bg-slate-50	dark:bg-slate-800">
              <h3 className="font-bold" style={{ fontSize: "35px" }}>
                Cómo jugar
              </h3>
            </div>
            <div className="relative p-6 flex-auto">
              <p style={typopgraphy}>
                Adivina la palabra oculta en cinco intentos.
              </p>
              <p style={typopgraphy}>
                Cada intento debe ser una palabra válida de 5 letras.
              </p>
              <p style={typopgraphy}>
                Después de cada intento el color de las letras cambia para
                mostrar qué tan cerca estás de acertar la palabra.
              </p>
              <p style={typopgraphy}>
                <strong>Ejemplos</strong>
              </p>
              <div className="flex flex-row justify-center items-center">
                {example1.map((letter, index) => (
                  <TileExample
                    key={index}
                    letter={letter}
                    background={letter === "G" ? "#6AAA64" : ""}
                  />
                ))}
              </div>
              <p style={typopgraphy}>
                La letra <strong>G</strong> está en la palabra y en la posición
                correcta.
              </p>
              <div className="flex flex-row justify-center items-center">
                {example2.map((letter, index) => (
                  <TileExample
                    key={index}
                    letter={letter}
                    background={letter === "C" ? "#CEB02C" : ""}
                  />
                ))}
              </div>
              <p style={typopgraphy}>
                La letra <strong>C</strong> está en la palabra pero en la
                posición incorrecta.
              </p>
              <div className="flex flex-row justify-center items-center">
                {example3.map((letter, index) => (
                  <TileExample
                    key={index}
                    letter={letter}
                    background={letter === "O" ? "#939B9F" : ""}
                  />
                ))}
              </div>
              <p style={typopgraphy}>
                La letra <strong>O</strong> no está en la palabra.
              </p>

              <p style={typopgraphy}>
                Puede haber letras repetidas. Las pistas son independientes para
                cada letra.{" "}
              </p>
              <p style={typopgraphy}>¡Una palabra nueva cada 5 minutos!</p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className=" text-white font-bold uppercase text-sm px-6 py-3 rounded mb-10 shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
                style={{
                  background: "#6AAA64",
                  width: "263px",
                  height: "50px",
                }}
              >
                ¡Jugar!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Information;
