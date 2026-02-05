import "./KanbanFixed.css";
import {
  boardColumns,
  breadcrumbs,
  toolbarAvatars,
} from "../data";
import type { CardData } from "../types";

const FIGMA_ICONS = "/figma-kanban";
const AVATARS = "/avatars";

const ICON_MAP: Record<string, string> = {
  bookmark: "bookmark-alt.svg",
  "chevron-double-up": "chevron-double-up.svg",
  "chevron-double-down": "chevron-double-down.svg",
  "question-mark": "question-mark-circle.svg",
  "check-circle": "check-circle.svg",
  flag: "flag.svg",
  "arrow-narrow-up": "arrow-narrow-up.svg",
  "arrow-narrow-down": "arrow-narrow-down.svg",
};

function Card({ title, badge, issueId, avatar, avatarImg, initials, icons, tagCount }: CardData) {
  return (
    <div className="kf-card">
      <p className="kf-card-title">{title}</p>
      {badge && (
        <div className="kf-card-badge">
          <span>{badge}</span>
        </div>
      )}
      <div className="kf-card-bottom">
        <div className="kf-card-statuses">
          {icons.map((icon) => (
            <img
              key={icon}
              src={`${FIGMA_ICONS}/${ICON_MAP[icon] || "bookmark-alt.svg"}`}
              alt=""
              width={24}
              height={24}
            />
          ))}
          <span className="kf-card-tag">{tagCount}</span>
        </div>
        <div className="kf-card-info">
          <span className="issue-id">{issueId}</span>
          {avatar === "initials" ? (
            <div className="kf-avatar-initials">{initials}</div>
          ) : (
            <img
              className="kf-avatar-img"
              src={`${AVATARS}/${avatarImg}`}
              alt=""
              width={24}
              height={24}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function KanbanFixed() {
  return (
    <div className="kanban-fixed">
      <header className="kf-header">
        <button type="button" className="kf-btn-text your-work">
          Your work
        </button>
        {["Projects", "Filters", "Dashboards", "People", "Apps"].map((label) => (
          <div key={label} className="kf-dropdown">
            <span>{label}</span>
            <img src={`${FIGMA_ICONS}/chevron-dropdown.svg`} alt="" />
          </div>
        ))}
        <button type="button" className="kf-btn-outline">
          Create
        </button>
        <div className="kf-search">
          <span>Search</span>
          <img src={`${FIGMA_ICONS}/search.svg`} alt="" />
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <button key={i} type="button" className="kf-icon-btn">
            <img src={`${FIGMA_ICONS}/header-icon-${i}.svg`} alt="" />
          </button>
        ))}
        <img
          className="kf-avatar"
          src={`${AVATARS}/avatar-afro-woman.png`}
          alt=""
        />
      </header>
      <div className="kf-header-divider" />

      <div className="kf-body">
      <aside className="kf-sidebar">
        <div className="kf-sidebar-content">
          <div className="kf-sidebar-project">
            <img src={`${FIGMA_ICONS}/at.svg`} alt="" />
            <div>
              <p className="title">Product Web</p>
              <p className="desc">Classic software project</p>
            </div>
          </div>
          <nav className="kf-sidebar-nav">
            <div className="kf-sidebar-nav-item">
              <img src={`${FIGMA_ICONS}/newspaper.svg`} alt="" />
              Backlog
            </div>
            <div className="kf-sidebar-nav-item active">
              <img src={`${FIGMA_ICONS}/view-boards.svg`} alt="" />
              Active sprints
            </div>
            <div className="kf-sidebar-nav-item">
              <img src={`${FIGMA_ICONS}/trending-up.svg`} alt="" />
              Reports
            </div>
            <div className="kf-sidebar-nav-divider" />
            <div className="kf-sidebar-nav-item">
              <img src={`${FIGMA_ICONS}/collection.svg`} alt="" />
              Issues
            </div>
            <div className="kf-sidebar-nav-item">
              <img src={`${FIGMA_ICONS}/puzzle.svg`} alt="" />
              Components
            </div>
            <div className="kf-sidebar-nav-item">
              <img src={`${FIGMA_ICONS}/code.svg`} alt="" />
              Code
            </div>
            <div className="kf-sidebar-nav-item">
              <img src={`${FIGMA_ICONS}/clipboard-check.svg`} alt="" />
              Releases
            </div>
            <div className="kf-sidebar-nav-item">
              <img src={`${FIGMA_ICONS}/document-duplicate.svg`} alt="" />
              Project pages
            </div>
          </nav>
        </div>
      </aside>

      <main className="kf-main">
      <div className="kf-breadcrumbs">
        {breadcrumbs.map((item) => (
          <div
            key={item.label}
            className={`kf-breadcrumb-item${item.current ? " current" : ""}`}
          >
            {item.label}
            {!item.current && (
              <img src={`${FIGMA_ICONS}/chevron-right.svg`} alt="" />
            )}
          </div>
        ))}
      </div>

      <div className="kf-top-row">
        <h1 className="kf-page-title">All sprints</h1>
        <button type="button" className="kf-btn-primary">
          Complete sprint
        </button>
        <button type="button" className="kf-toolbar-icon i1">
          <img src={`${FIGMA_ICONS}/header-icon-1.svg`} alt="" />
        </button>
        <button type="button" className="kf-toolbar-icon i2">
          <img src={`${FIGMA_ICONS}/header-icon-2.svg`} alt="" />
        </button>
        <button type="button" className="kf-toolbar-icon i3">
          <img src={`${FIGMA_ICONS}/header-icon-3.svg`} alt="" />
        </button>
      </div>

      <div className="kf-toolbar-row">
      <div className="kf-toolbar-search">
        <span>Search</span>
        <img src={`${FIGMA_ICONS}/search.svg`} alt="" />
      </div>
      <div className="kf-toolbar-avatars">
        {toolbarAvatars.map((item, index) => (
          <div key={index} className="kf-avatar-wrap">
            {item.type === "count" ? (
              item.value
            ) : (
              <img src={`${AVATARS}/${item.src}`} alt="" />
            )}
          </div>
        ))}
      </div>
      <button type="button" className="kf-toolbar-btn only-my">
        Only My Issues
      </button>
      <button type="button" className="kf-toolbar-btn recently">
        Recently Updated
      </button>
      <div className="kf-toolbar-dropdown">
        <span>All sprints</span>
        <img src={`${FIGMA_ICONS}/chevron-dropdown.svg`} alt="" />
      </div>
      </div>

      <div className="kf-boards">
        {boardColumns.map((col) => (
          <div key={col.title} className="kf-board-column">
            <h2 className="kf-board-column-title">{col.title}</h2>
            <div className="kf-board-cards">
              {col.cards.map((card, index) => (
                <Card key={`${card.issueId}-${index}`} {...card} />
              ))}
            </div>
          </div>
        ))}
      </div>
      </main>
      </div>
    </div>
  );
}
