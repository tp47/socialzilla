import { Outlet } from "react-router-dom";

import Navbar from '../navbar/Navbar';
import Leftbar from '../leftbar/Leftbar';
import Rightbar from '../rightbar/Rightbar';

const Layout = () => {
  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>
      <main className="flex flex-row justify-between">
        <Leftbar />
        <Outlet />
        <Rightbar />
      </main>
    </>
  );
};

export default Layout;
