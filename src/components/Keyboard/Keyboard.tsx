import Key from "./Key";

const Keyboard = () => {
  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
  ];

  const margins = ["42px", "58px", "10px"]

  return (
    <div className="border-2 rounded-lg p-6 bg-slate-50	dark:bg-slate-800" style={{ width:"100%"}}>
      {keyboardKeys.map((line, index) => (
        <div className="flex flex-row justify-start"
          key={index}
          style={{marginLeft: margins[index]}}
        >
          {line.map((char, index) => (
              <Key key={index} letter={char} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard
