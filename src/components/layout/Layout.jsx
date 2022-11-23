import {useContext} from "react";
import { Outlet } from "react-router-dom";

import Navbar from '../navbar/Navbar';
import Leftbar from '../leftbar/Leftbar';
import Rightbar from '../rightbar/Rightbar';
import {DarkModeContext} from "../../context/darkModeContext";

const Layout = () => {
  const {isDarkMode} = useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main className="flex flex-row justify-between">
        <Leftbar />
        <Outlet />
        <Rightbar />
      </main>
    </div>
  );
};

export default Layout;
