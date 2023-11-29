import { RowPros } from "../../types";
import Tile from "./Tile";

const Row = ({id}: RowPros) => {
  const nums = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-row justify-center items-center">
      {nums.map((__, index) => (
        <Tile rowId={id} key={index} id={index} />
      ))}
    </div>
  );
}

export default Row
