import { TileExampleProps } from "../../types";

const TileExample = ({ background, letter }: TileExampleProps) => {
  const style = {
    background,
    color: "black",
  };

  return (
    <div
      className="flex justify-center my-[2px] m-[2px] items-center  w-[50px] h-[50px] border-2 dark:text-white	dark:bg-slate-600"
      style={style}
    >
      <p className="flex self-center mb-2 font-bold text-5xl dark:text-white ">{letter}</p>
    </div>
  );
};

export default TileExample;
