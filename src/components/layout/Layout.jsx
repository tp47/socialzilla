import { Outlet } from "react-router-dom";

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
