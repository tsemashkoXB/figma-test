import { ICONS } from "../constants";
import type { NavItem } from "../types";

interface SidebarNavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

function SidebarNavItem({ icon, label, active }: SidebarNavItemProps) {
  return (
    <div className={`sidebar-nav-item${active ? " active" : ""}`}>
      <img src={`${ICONS}/${icon}`} alt="" />
      {label}
    </div>
  );
}

interface SidebarProps {
  primaryNavItems: NavItem[];
  secondaryNavItems: NavItem[];
}

export function Sidebar({ primaryNavItems, secondaryNavItems }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-project">
          <img
            className="sidebar-project-icon"
            src={`${ICONS}/at.svg`}
            alt=""
          />
          <div className="sidebar-project-info">
            <p className="title">Product Web</p>
            <p className="desc">Classic software project</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          {primaryNavItems.map((item) => (
            <SidebarNavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={item.active}
            />
          ))}
          <div className="sidebar-nav-divider" />
          {secondaryNavItems.map((item) => (
            <SidebarNavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={item.active}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
}
