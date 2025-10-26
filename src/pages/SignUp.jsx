import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ContainerCard from "../components/ContainerCard";
import AuthFormFormik from "../components/AuthFormFormik";
import { generateId, generateToken } from "../utils/helpers";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === values.email);

    if (existingUser) {
      toast.error("Email already exists. Try logging in.");
      return;
    }

    const newUser = {
      id: generateId(),
      name: values.name,
      email: values.email,
      password: values.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Create session
    const session = { token: generateToken(), userId: newUser.id };
    localStorage.setItem("ticketapp_session", JSON.stringify(session));

    toast.success("Account created successfully! Redirecting...");
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  return (
    <ContainerCard>
      <AuthFormFormik mode="signup" onSubmit={handleSignup} />
      <p className="text-gray-600 font-medium p-5">Already have an account? <NavLink to="/logoin" className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded">Login</NavLink></p>
    </ContainerCard>
  );
}
