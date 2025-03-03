import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import About from "../sections/About";
import Education from "../sections/Education";
import Experience from "../sections/Experience";

import { Outlet, useLocation } from "react-router-dom";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="app">
      <Navbar />
      {isHomePage ? (
        <main>
          <About />
          <Experience />
          <Education />
        </main>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
}

export default AppLayout;
