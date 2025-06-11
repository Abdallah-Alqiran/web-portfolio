import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Scroll from "./layouts/scrolltoup";

// Lazy load components
const HomePage = lazy(() => import("./routes/homepage"));
const Details = lazy(() => import("./pages/detailsproject"));

export default function App() {
  return (
    <div className="relative">
      <Suspense fallback={<p className="text-center mt-10 text-gray-500">Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:projectId" element={<Details />} />
        </Routes>
      </Suspense>

      <Scroll />
    </div>
  );
}
