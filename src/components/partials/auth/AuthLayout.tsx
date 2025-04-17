import { Link } from "react-router-dom";

type AuthLayoutProps = {
  title: string;  // The title of the page (e.g., "Login" or "Register")
  children: React.ReactNode;  // The content (like forms) inside the layout
  navigationType: string;  // Determines which navigation to show (login or register)
};

type NavigationProps = {
  type: string;  // Type can be "login" or "register"
};

const AuthLayout = ({ title, children, navigationType }: AuthLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-wrap">
      {/* Left side of the layout - shows background image on larger screens */}
      <div
        className={`hidden lg:block lg:w-1/2 ${"bg-[url('/images/login/bg-login.jpg')]"}`}
      ></div>
      
      {/* Right side of the layout where the form or children content appears */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
        <div className="w-full md:w-2/3 p-8 rounded-md shadow-xl">
          
          {/* Header with title and logo */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="max-w-40 -ml-2"
              />
            </Link>
          </div>

          {/* Main content (form or any child components) */}
          {children}
          
          {/* Navigation link to switch between login and register */}
          <Navigation type={navigationType} />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }: NavigationProps) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-accent">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-accent">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
