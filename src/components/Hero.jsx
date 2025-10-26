import { NavLink } from "react-router-dom";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      aria-labelledby="hero-title"
    > 
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] bg-indigo-400 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-12 right-0 w-[25rem] h-[25rem] bg-indigo-400 rounded-full blur-3xl opacity-35 translate-x-1/3"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1
          id="hero-title"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
        >
          Ticket Manager Pro
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Track and manage your support tickets effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/login"
            className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-medium border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Get Started
          </NavLink>
        </div>
      </div>

      {/*Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,218.7C672,235,768,213,864,197.3C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

    </section>
  );
}
