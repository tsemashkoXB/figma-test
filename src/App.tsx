import { Routes, Route, Navigate } from "react-router-dom";
import KanbanAutoLayout from "./pages/KanbanAutoLayout";

function App() {
  return (
    <Routes>
      <Route path="/kanban-autolayout" element={<KanbanAutoLayout />} />
      <Route path="/" element={<Navigate to="/kanban-autolayout" replace />} />
    </Routes>
  );
}

export default App;
