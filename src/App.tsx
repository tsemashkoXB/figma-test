import "./App.css";
import {
  Header,
  Sidebar,
  Breadcrumbs,
  Toolbar,
  Board,
} from "./components";
import {
  headerDropdowns,
  sidebarNavItems,
  sidebarNavItemsSecondary,
  breadcrumbs,
  toolbarAvatars,
  boardColumns,
} from "./data";

function App() {
  return (
    <div className="kanban">
      <Header dropdowns={headerDropdowns} />

      <div className="layout-body">
        <Sidebar
          primaryNavItems={sidebarNavItems}
          secondaryNavItems={sidebarNavItemsSecondary}
        />

        <main className="main">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="page-title">All sprints</h1>
          <Toolbar avatars={toolbarAvatars} />
          <Board columns={boardColumns} />
        </main>
      </div>
    </div>
  );
}

export default App;
