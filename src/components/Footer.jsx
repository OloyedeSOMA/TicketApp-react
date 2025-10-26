import { NavLink } from 'react-router-dom';
import LogoIcon from '../assets/icons/TicketLogo.svg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
          <NavLink to="/" className="flex items-center gap-2">
            <img src={LogoIcon} alt="" className="w-6 h-6 text-primary" />
            <span className="font-semibold text-gray-900">Ticket Manager Pro</span>
          </NavLink>

          
          <p className="text-sm text-gray-500">
            © 2025 Ticket Manager Pro HNG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}