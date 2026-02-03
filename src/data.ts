import type { CardData, NavItem, BreadcrumbItem, DropdownItem, BoardColumnData } from "./types";

export const todoCards: CardData[] = [
  {
    title:
      "As a translator, I want integrate Crowdin webhook to notify translators about changed strings",
    badge: "Refactoring",
    issueId: "FC – 7",
    avatar: "initials",
    initials: "PG",
    icons: ["bookmark", "chevron-double-up", "tag"],
    tagCount: "2",
  },
  {
    title:
      "As a user, I want to see actual overusage price for next download",
    issueId: "BC – 14",
    avatar: "photo",
    avatarImg: "avatar-afro-man.png",
    icons: ["bookmark", "question-mark", "tag"],
    tagCount: "1",
  },
  {
    title: "As a team license owner, I want to use multiplied limits",
    issueId: "BC – 11",
    avatar: "photo",
    avatarImg: "avatar-afro-man.png",
    icons: ["flag", "question-mark", "tag"],
    tagCount: "2",
  },
  {
    title:
      "Font SCSS mixin does not recognise fallback for font-family",
    issueId: "FC – 9",
    avatar: "initials",
    initials: "PG",
    icons: ["flag", "chevron-double-up", "tag"],
    tagCount: "3",
  },
  {
    title: "Interate nuxt-18n in product-developers project",
    badge: "Refactoring",
    issueId: "FC – 8",
    avatar: "initials",
    initials: "PG",
    icons: ["check-circle", "chevron-double-up", "tag"],
    tagCount: "5",
  },
];

export const inProgressCards: CardData[] = [
  {
    title:
      "As an external contributor, I want to be able to see status of uploaded materials",
    issueId: "MAR – 14",
    avatar: "photo",
    avatarImg: "avatar-asian-woman.png",
    icons: ["bookmark", "chevron-double-down", "tag"],
    tagCount: "3",
  },
  {
    title: "Replace JustComments with something",
    issueId: "FC – 19",
    avatar: "initials",
    initials: "PG",
    icons: ["check-circle", "arrow-narrow-up", "tag"],
    tagCount: "3",
  },
  {
    title: "As manual licensed User, I want to see my limits",
    issueId: "BC – 8",
    avatar: "photo",
    avatarImg: "avatar-afro-man.png",
    icons: ["bookmark", "question-mark", "tag"],
    tagCount: "2",
  },
  {
    title: "Create a storage to store common translations",
    badge: "Refactoring",
    issueId: "FC – 16",
    avatar: "initials",
    initials: "PG",
    icons: ["check-circle", "chevron-double-up", "tag"],
    tagCount: "5",
  },
  {
    title:
      "CLONE – As an external contributor, I want to be able to upload a zip of my original materials",
    issueId: "MAR – 18",
    avatar: "photo",
    avatarImg: "avatar-asian-woman.png",
    icons: ["bookmark", "chevron-double-down", "tag"],
    tagCount: "2",
  },
  {
    title:
      "As a contributor, I want new calculation algorithm for my earnings",
    issueId: "MAR – 17",
    avatar: "photo",
    avatarImg: "avatar-asian-woman.png",
    icons: ["bookmark", "chevron-double-up", "tag"],
    tagCount: "3",
  },
];

export const doneCards: CardData[] = [
  {
    title:
      "As a user, I want to access Intercom help center, so that I am not confused by Crisp",
    issueId: "FC – 13",
    avatar: "initials",
    initials: "PG",
    icons: ["bookmark", "arrow-narrow-down", "tag"],
    tagCount: "1",
  },
  {
    title: "Remove requests to ipfy service from frontend",
    issueId: "FC – 17",
    avatar: "initials",
    initials: "PG",
    icons: ["check-circle", "arrow-narrow-up", "tag"],
    tagCount: "2",
  },
];

export const boardColumns: BoardColumnData[] = [
  { title: "To do", cards: todoCards },
  { title: "In progress", cards: inProgressCards },
  { title: "DONE", cards: doneCards },
];

export const headerDropdowns: DropdownItem[] = [
  { label: "Projects" },
  { label: "Filters" },
  { label: "Dashboards" },
  { label: "People" },
  { label: "Apps" },
];

export const sidebarNavItems: NavItem[] = [
  { icon: "newspaper.svg", label: "Backlog" },
  { icon: "view-boards.svg", label: "Active sprints", active: true },
  { icon: "trending-up.svg", label: "Reports" },
];

export const sidebarNavItemsSecondary: NavItem[] = [
  { icon: "collection.svg", label: "Issues" },
  { icon: "puzzle.svg", label: "Components" },
  { icon: "code.svg", label: "Code" },
  { icon: "clipboard-check.svg", label: "Releases" },
  { icon: "document-duplicate.svg", label: "Project pages" },
];

export const breadcrumbs: BreadcrumbItem[] = [
  { label: "Projects" },
  { label: "International" },
  { label: "Product Web", current: true },
];

export const toolbarAvatars = [
  { type: "count" as const, value: "9" },
  { type: "image" as const, src: "avatar-asian-man.png" },
  { type: "image" as const, src: "avatar-white-woman.png" },
  { type: "image" as const, src: "avatar-white-man.png" },
  { type: "image" as const, src: "avatar-afro-woman.png" },
];
