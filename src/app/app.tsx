import { Routes, Route } from "react-router-dom";
import Details from "./pages/detailsproject";
import HomePage from "./routes/homepage";
import Scroll from "./layouts/scrolltoup";

export default function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:projectId" element={<Details />} />
      </Routes>

      <Scroll />
    </div>
  );
}
