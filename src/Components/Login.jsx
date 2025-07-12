import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const result = await signIn(email, password);
      const user = result.user;
      toast.success(`Welcome ${user?.displayName || "Back"}!`);
      setTimeout(() => {
        navigate(location.state?.from || "/", { replace: true });
      }, 500);
    } catch (err) {
      setErrorMsg("Invalid email or password. Please try again.");
      toast.error("Login failed: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await googleSignIn(provider);
      const user = result.user;
      toast.success(`Logged in with Google as ${user?.displayName}`);
      setTimeout(() => {
        navigate(location.state?.from || "/", { replace: true });
      }, 500);
    } catch (err) {
      setErrorMsg("Google login failed.");
      toast.error("Google Login Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-green-900 to-black">
      <Helmet><title>Login</title></Helmet>
      <ToastContainer theme="colored" />
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-20 pb-5">
        <form onSubmit={handleLogin} className="max-w-md w-full bg-black bg-opacity-70 backdrop-blur-md rounded-lg p-8 text-white roboto">
          <h2 className="text-4xl font-bold mb-8 text-green-400 text-center">Please Login</h2>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Enter your e-mail..."
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-green-300 mb-1 block">Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md px-3 py-2 bg-black bg-opacity-50 border border-green-600 focus:border-green-400 outline-none"
              placeholder="Enter your password..."
              required
            />
          </label>

          {errorMsg && <p className="text-sm text-red-500 mb-3">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full btn text-lg border-green-900 bg-green-700 hover:bg-green-600 transition rounded-full py-3 text-white font-semibold mb-4"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full btn text-lg bg-white text-black hover:bg-gray-300 transition rounded-full py-3 font-semibold flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="mt-6 text-center text-green-300">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-green-400 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
