import { Routes,Route,  Navigate, useNavigate } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound";
import { AboutMe } from "../pages/aboutMe";
import { Portfolio } from "../pages/portfolio";

function RoutesApp() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/portfolio/:login" element={<Portfolio />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="*" element={<Navigate to={-1} replace />} />
      </Routes>
  );
}

export { RoutesApp };
