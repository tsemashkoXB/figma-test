import { AVATARS } from "../constants";

interface AvatarProps {
  type: "initials" | "photo";
  initials?: string;
  src?: string;
  size?: number;
  className?: string;
}

export function Avatar({
  type,
  initials,
  src,
  size = 24,
  className,
}: AvatarProps) {
  if (type === "initials") {
    return (
      <div className={className || "avatar-initials"}>{initials}</div>
    );
  }

  return (
    <img
      className={className || "avatar"}
      src={`${AVATARS}/${src}`}
      alt=""
      width={size}
      height={size}
    />
  );
}
