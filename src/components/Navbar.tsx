import { NavLink } from "react-router-dom";
import { FileText, Info, Shield } from "lucide-react";

const Navbar = () => {
  const linkClasses = "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-primary text-primary-foreground";
  const inactiveLinkClasses = "text-muted-foreground hover:bg-accent hover:text-accent-foreground";

  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Resume Builder</span>
        </div>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
          >
            Builder
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
          >
            <Info className="h-4 w-4" /> About
          </NavLink>
          <NavLink
            to="/privacy"
            className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
          >
            <Shield className="h-4 w-4" /> Privacy
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;