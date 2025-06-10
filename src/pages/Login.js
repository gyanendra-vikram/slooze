import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-800">
//       <form className="bg-white dark:bg-gray-700 p-6 rounded shadow" onSubmit={handleSubmit}>
//         <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Login</h2>
//         <input className="block w-full mb-3 p-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         <input className="block w-full mb-3 p-2" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
//       </form>
//     </div>
//   );
return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
        {/* <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
        <p className="text-sm text-center mt-2">
          <Link to="/reset" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
