import { Routes,Route,  Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound";
import { AboutMe } from "../pages/aboutMe";
import { Portfolio } from "../pages/portfolio";

function RoutesApp() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export { RoutesApp };
