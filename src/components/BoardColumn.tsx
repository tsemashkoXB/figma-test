import { TaskCard } from "./TaskCard";
import type { CardData } from "../types";

interface BoardColumnProps {
  title: string;
  cards: CardData[];
}

export function BoardColumn({ title, cards }: BoardColumnProps) {
  return (
    <div className="board-column">
      <h2 className="board-column-title">{title}</h2>
      <div className="board-cards">
        {cards.map((card, index) => (
          <TaskCard key={`${card.issueId}-${index}`} {...card} />
        ))}
      </div>
    </div>
  );
}
