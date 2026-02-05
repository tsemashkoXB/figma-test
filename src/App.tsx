import { Routes, Route, Navigate } from "react-router-dom";
import KanbanAutoLayout from "./pages/KanbanAutoLayout";
import KanbanFixed from "./pages/KanbanFixed";

function App() {
  return (
    <Routes>
      <Route path="/kanban-autolayout" element={<KanbanAutoLayout />} />
      <Route path="/kanban-fixed" element={<KanbanFixed />} />
      <Route path="/" element={<Navigate to="/kanban-autolayout" replace />} />
    </Routes>
  );
}

export default App;
