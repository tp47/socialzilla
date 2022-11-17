import { Outlet } from "react-router-dom";

import Navbar from '../navbar/Navbar';
import Leftbar from '../leftbar/Leftbar';
import Rightbar from '../rightbar/Rightbar';

const Layout = () => {
  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main className="flex flex-row">
        <Leftbar />
        <Outlet />
        <Rightbar />
      </main>
    </>
  );
};

export default Layout;
