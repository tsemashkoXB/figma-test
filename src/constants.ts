export const ICONS = "/icons";
export const AVATARS = "/avatars";

export const ICON_MAP: Record<string, string> = {
  bookmark: "bookmark-alt.svg",
  "chevron-double-up": "chevron-double-up.svg",
  "chevron-double-down": "chevron-double-down.svg",
  "question-mark": "question-mark-circle.svg",
  "check-circle": "check-circle.svg",
  flag: "flag.svg",
  "arrow-narrow-up": "arrow-narrow-up.svg",
  "arrow-narrow-down": "arrow-narrow-down.svg",
};

export function getIconSrc(name: string): string {
  return `${ICONS}/${ICON_MAP[name] || "bookmark-alt.svg"}`;
}
