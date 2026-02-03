import { SearchBox } from "./SearchBox";
import { Dropdown } from "./Dropdown";
import { IconButton } from "./IconButton";
import { AvatarStack } from "./AvatarStack";

interface ToolbarAvatarItem {
  type: "count" | "image";
  value?: string;
  src?: string;
}

interface ToolbarProps {
  avatars: ToolbarAvatarItem[];
}

export function Toolbar({ avatars }: ToolbarProps) {
  return (
    <div className="toolbar">
      <SearchBox className="toolbar-search" />
      <button type="button" className="btn-text">
        Only My Issues
      </button>
      <button type="button" className="btn-text">
        Recently Updated
      </button>
      <Dropdown
        label="All sprints"
        icon="chevron-dropdown.svg"
        className="toolbar-dropdown"
      />
      <div className="toolbar-spacer" />
      <AvatarStack items={avatars} />
      <button type="button" className="btn-primary">
        Complete sprint
      </button>
      <div className="toolbar-actions">
        <IconButton />
        <IconButton />
        <IconButton outline />
      </div>
    </div>
  );
}
