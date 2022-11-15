import { Outlet } from "react-router-dom";

import Navbar from '../navbar/Navbar';
import Leftbar from '../leftbar/Leftbar';
import Rightbar from '../rightbar/Rightbar';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Leftbar />
        <Outlet />
        <Rightbar />
      </main>
    </>
  );
};

export default Layout;
