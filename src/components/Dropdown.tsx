import { ICONS } from "../constants";

interface DropdownProps {
  label: string;
  icon?: string;
  className?: string;
}

export function Dropdown({
  label,
  icon = "chevron.svg",
  className = "header-dropdown",
}: DropdownProps) {
  return (
    <div className={className}>
      <span>{label}</span>
      <img src={`${ICONS}/${icon}`} alt="" />
    </div>
  );
}
