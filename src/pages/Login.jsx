import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ContainerCard from "../components/ContainerCard";
import AuthFormFormik from "../components/AuthFormFormik";
import { generateToken } from "../utils/helpers";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (!user) {
      toast.error("Invalid email or password!");
      return;
    }

    const session = { token: generateToken(), userId: user.id };
    localStorage.setItem("ticketapp_session", JSON.stringify(session));

    toast.success(`Welcome back, ${user.name || "User"}! Redirecting...`);
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <ContainerCard>
      <AuthFormFormik mode="login" onSubmit={handleLogin} />
      <p className="text-gray-600 font-medium p-5">Don't have an account? <NavLink to="/signup" className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded">Sign Up</NavLink></p>
    </ContainerCard>
  );
}
