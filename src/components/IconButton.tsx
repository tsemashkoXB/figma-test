import { ICONS } from "../constants";

interface IconButtonProps {
  icon?: string;
  outline?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function IconButton({
  icon = "icon-btn-1.svg",
  outline = false,
  className = "",
  ariaLabel = "Icon",
}: IconButtonProps) {
  const classes = ["icon-btn", outline && "outline", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} aria-label={ariaLabel}>
      <img src={`${ICONS}/${icon}`} alt="" />
    </button>
  );
}
