import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { MadeWithDyad } from "./made-with-dyad";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Layout;