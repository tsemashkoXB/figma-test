export interface CardData {
  title: string;
  badge?: string;
  issueId: string;
  avatar: "initials" | "photo";
  avatarImg?: string;
  initials?: string;
  icons: string[];
  tagCount: string;
}

export interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  current?: boolean;
}

export interface DropdownItem {
  label: string;
}

export interface BoardColumnData {
  title: string;
  cards: CardData[];
}
