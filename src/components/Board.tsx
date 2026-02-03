import { BoardColumn } from "./BoardColumn";
import type { BoardColumnData } from "../types";

interface BoardProps {
  columns: BoardColumnData[];
}

export function Board({ columns }: BoardProps) {
  return (
    <div className="boards">
      {columns.map((column) => (
        <BoardColumn key={column.title} title={column.title} cards={column.cards} />
      ))}
    </div>
  );
}
