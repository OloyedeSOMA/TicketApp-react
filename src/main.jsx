import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from './App.jsx'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import './index.css'
import TicketManager from './pages/TicketManager.jsx';

const router = createBrowserRouter([
  // Redirect root → login
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tickets",
    element: (
      <ProtectedRoute>
        <TicketManager />
      </ProtectedRoute>
    ),
  },
  // fallback route
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
  </StrictMode>
)
