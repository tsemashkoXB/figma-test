import { ICONS } from "../constants";
import type { BreadcrumbItem } from "../types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      {items.map((item) => (
        <div
          key={item.label}
          className={`breadcrumb-item${item.current ? " current" : ""}`}
        >
          {item.label}
          {!item.current && (
            <img src={`${ICONS}/chevron-right.svg`} alt="" />
          )}
        </div>
      ))}
    </div>
  );
}
