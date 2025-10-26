import { NavLink } from "react-router-dom";
export default function QuickActionCard({ icon, title, desc, bg, href }) {
  return (
    <NavLink
      to={href}
      className={`flex items-start gap-3 p-4 rounded-xl transition ${bg} hover:shadow-sm`}
    >
      <img src={icon} alt="" className="w-6 h-6" />
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </NavLink>
  );
}