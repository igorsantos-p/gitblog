import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Issue } from "./pages/Issue/Issue";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue/:id" element={<Issue />} />
    </Routes>
  );
}
