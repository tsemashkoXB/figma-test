import { ICONS } from "../constants";

interface SearchBoxProps {
  className?: string;
}

export function SearchBox({ className = "" }: SearchBoxProps) {
  return (
    <div className={className}>
      <img src={`${ICONS}/search.svg`} alt="" />
      <span>Search</span>
    </div>
  );
}
