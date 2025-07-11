import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
import { authDataContext } from "../context/AuthContext";
function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  let {serverUrl} = useContext(authDataContext)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  
  //axios install karenge wo backend se data ko fetch karega
  // axios ke through post request se data fetch hoga 
  const handleSignUP = async(e)=>{
    try {
      e.preventDefault()
      let result = await axios.post(serverUrl + "/api/auth/signup",{
        name,
        email,
        password
        // ye sb values body se le rhe h
      }, {withCredentials: true})
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div
        className="w-[40px] p-3 h-[100vh], bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] 
      flex items-center justify-center"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="w-[25px] h-[20px] text-[white]" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome to AirBnb
        </h2>
        <form action="" onSubmit={handleSignUP}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setName(e.target.value)}
              value= {name}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setEmail(e.target.value)}
              value= {email}
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setPassword(e.target.value)}
              value= {password}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 pt-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} className="text-gray-500" />
              ) : (
                <AiOutlineEye size={20} className="text-gray-500" />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white rounded-lg py-2 my-2 hover:bg-pink-700 transition-colors"
          >
            Sign Up
          </button>
          <p className="text-[18px]">
            Already have an account?
            <span
              className="text-[19px] text-[red] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
