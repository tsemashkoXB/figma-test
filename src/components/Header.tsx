import { AVATARS } from "../constants";
import { IconButton } from "./IconButton";
import { SearchBox } from "./SearchBox";
import { Dropdown } from "./Dropdown";
import type { DropdownItem } from "../types";

interface HeaderProps {
  dropdowns: DropdownItem[];
}

export function Header({ dropdowns }: HeaderProps) {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <button type="button" className="btn-text">
            Your work
          </button>
        </nav>
        <div className="header-dropdowns">
          {dropdowns.map((item) => (
            <Dropdown key={item.label} label={item.label} />
          ))}
        </div>
        <button type="button" className="btn-outline">
          Create
        </button>
        <SearchBox className="header-search" />
        <div className="header-actions">
          {Array.from({ length: 5 }).map((_, index) => (
            <IconButton key={index} />
          ))}
          <img
            className="header-avatar"
            src={`${AVATARS}/avatar-afro-woman.png`}
            alt=""
          />
        </div>
      </header>
      <div className="header-divider" />
    </>
  );
}
