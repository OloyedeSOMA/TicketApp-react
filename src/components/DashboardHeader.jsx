import { NavLink, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import logoutIcon from "../assets/icons/logout.svg";
import TicketIcon from "../assets/icons/TicketLogo.svg";
import {getCurrentUser, userLogout} from '../utils/helpers';
export default function DashboardHeader() {
  const navigate = useNavigate();
    
    //get user
    const currentUser = getCurrentUser();

    const handleLogout = () => {
      userLogout();
      toast.info("You’ve been logged out.");
      setTimeout(() => navigate("/"), 1500);
    };

  
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={TicketIcon} alt="" className="w-8 h-8" />
          <h1 className="hidden md:block text-xl font-bold text-gray-900 ">Ticket Manager Pro</h1>
        </div>
        <div className="flex items-center gap-4">
          <NavLink to="/dashboard" className={({isActive})=>` transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded ${isActive? 'text-indigo-700 font-medium hover:text-indigo-600': 'text-indigo-400 font-medium hover:text-indigo-500'}`} aria-label="dashboard">Dashboard</NavLink>
          <NavLink to="/tickets" className={({isActive})=>` transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded ${isActive? 'text-indigo-700 font-medium hover:text-indigo-600': 'text-indigo-400 font-medium hover:text-indigo-500'}`} aria-label="tickets">Tickets</NavLink>
          <div className="flex items-center gap-2">
            
            <span className="text-md text-gray-700 hidden sm:block"><b>{currentUser.name}</b></span>
          </div>
          <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition cursor-pointer" onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" className="w-5 h-5" />
            <span>Logout</span>
         </button>
        </div>
      </div>
    </header>
  );
}