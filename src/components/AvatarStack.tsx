import { AVATARS } from "../constants";

interface AvatarStackItem {
  type: "count" | "image";
  value?: string;
  src?: string;
}

interface AvatarStackProps {
  items: AvatarStackItem[];
}

export function AvatarStack({ items }: AvatarStackProps) {
  return (
    <div className="avatar-stack">
      {items.map((item, index) => (
        <div key={index} className="avatar-wrap">
          {item.type === "count" ? (
            item.value
          ) : (
            <img src={`${AVATARS}/${item.src}`} alt="" />
          )}
        </div>
      ))}
    </div>
  );
}
