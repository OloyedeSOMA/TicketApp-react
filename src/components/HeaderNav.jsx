import { NavLink } from "react-router-dom";
import TicketLogo from "../assets/icons/TicketLogo.svg";

export default function HeaderNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        
        <NavLink
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <img
            src={TicketLogo}
            alt="Ticket Manager Pro Logo"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            Ticket Manager Pro
          </span>
        </NavLink>

        
        <nav aria-label="Main navigation">
          <NavLink
            to="/login"
            className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
