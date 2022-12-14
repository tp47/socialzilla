import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../navbar/Navbar";
import Leftbar from "../leftbar/Leftbar";
import Rightbar from "../rightbar/Rightbar";

const Layout = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main className="flex flex-col sm:flex-row sm:justify-between">
        <Leftbar />
        <Outlet />
        <Rightbar />
      </main>
    </div>
  );
};

export default Layout;
