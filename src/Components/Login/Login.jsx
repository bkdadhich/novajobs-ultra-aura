import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../Footer/Footer.css";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from "axios";

function Login() {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = role === "student" ? "https://novajobs.us/api/students/login" : "https://novajobs.us/api/trainers/login";
    console.log(url);
    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required");
    } else {
      try {
        const response = await axios.post(
          url,
          
          formData,
          {
            // withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.status === 200) {
          toast.success("Logged-in successfully!");
          navigate(role === "student" ? '/' : '/trainers');
        } else {
          toast.error("Failed to log in.");
        }
        console.log("login Response", response);
      } catch (err) {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className=" " id="bgimage">
        <div className="min-h-screen flex justify-end px-2 md:px-16 py-12">
          <div
            className=" p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg"
            id="bg"
          >
            <h2 className="text-2xl text-white font-bold mb-6 text-center">
              Login
            </h2>
            <div className="flex justify-center mb-6">
              <button
                className={`px-4 py-2 font-semibold rounded-lg ${
                  role === "student"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                className={`ml-4 px-4 py-2 font-semibold rounded-lg ${
                  role === "trainer"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setRole("trainer")}
              >
                Trainer
              </button>
            </div>

            {role === "student" ? (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-white">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your password"
                  />
                </div>
                <Link to="/signup">
                  <p className=" text-blue-300 hover:text-yellow-300 text-center py-2">
                    New User? Create Account
                  </p>
                </Link>

                <div className=" text-center py-2">
                  <label className=" text-white ">
                    {" "}
                    I agree to Terms and condition{" "}
                  </label>
                  <input type="checkbox" required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-white">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your password"
                  />
                </div>
                <Link to="/signup">
                  <p className=" text-blue-300 hover:text-yellow-300 text-center py-2">
                    New User? Create Account
                  </p>
                </Link>

                <div className=" text-center py-2">
                  <label className=" text-white ">
                    {" "}
                    I agree to Terms and condition{" "}
                  </label>
                  <input type="checkbox" required />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md"
                >
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
