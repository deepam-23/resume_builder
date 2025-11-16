import { NavLink } from "react-router-dom";
import { FileText, Info, Shield, LogOut, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const linkClasses = "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-primary text-primary-foreground";
  const inactiveLinkClasses = "text-muted-foreground hover:bg-accent hover:text-accent-foreground";

  return (
    <header className="bg-card border-b sticky top-0 z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">Resume Builder</span>
        </NavLink>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <NavLink
                to="/builder"
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                Builder
              </NavLink>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </>
          ) : (
            <>
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
              <Button asChild>
                <NavLink to="/login">
                  <User className="mr-2 h-4 w-4" /> Login
                </NavLink>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;