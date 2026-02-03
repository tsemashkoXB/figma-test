import { getIconSrc } from "../constants";
import { Avatar } from "./Avatar";
import type { CardData } from "../types";

interface TaskCardProps extends CardData {}

export function TaskCard({
  title,
  badge,
  issueId,
  avatar,
  avatarImg,
  initials,
  icons,
  tagCount,
}: TaskCardProps) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      {badge && (
        <div className="card-badge">
          <span>{badge}</span>
        </div>
      )}
      <div className="card-bottom">
        <div className="card-statuses">
          {icons.map((icon) => (
            <img key={icon} src={getIconSrc(icon)} alt="" width={24} height={24} />
          ))}
          <span className="card-tag">{tagCount}</span>
        </div>
        <div className="card-info">
          <span className="issue-id">{issueId}</span>
          <Avatar
            type={avatar}
            initials={initials}
            src={avatarImg}
          />
        </div>
      </div>
    </div>
  );
}
