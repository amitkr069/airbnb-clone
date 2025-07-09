// navbar banayenge ye dikhega home page me
import React, { useContext } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

// bottom ke liye
import { MdWhatshot, MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";

import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { authDataContext } from "../context/AuthContext";

export default function Nav() {
  let [ showpopup, setShowpopup ] = useState(false);
  let navigate = useNavigate()
  
  let {serverUrl} = useContext(authDataContext)
  const handleLogOut = async ()=>{
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout", {withCredentials:true})
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <nav className="bg-white shadow p-4 flex items-center justify-between">
        {/* Left: Company Logo */}
        <div className="text-xl font-bold text-pink-600">
          <div>
            {" "}
            <img src={logo} className="w-[120px] h-[5vh]" />
          </div>
        </div>

        {/* Middle: Search Bar + Icon */}
        <div className="w-[40%] mx-4 relative hidden md:block">
          <input
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-600 bg-white rounded-full p-1 hover:bg-gray-100">
            <FaSearch size={14} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-[10px] relative">
          <span className="text-[18px] cursor-pointer rounded-[30px] hover:bg-[#ded9d9] px-[8px] py-[5px] hidden md:block">
            List Your Home
          </span>
          <button className="px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg"
          onClick={()=>setShowpopup(prev=>!prev)}>
            <span>
              <GiHamburgerMenu className="h-[20px] w-[20px]" />
            </span>
            <span>
              <CgProfile className="h-[20px] w-[20px]" />
            </span>
          </button>
          {showpopup && <div
            className="w-[220px] h-[250px] absolute bg-slate-50 top-[110%] right-[5%]
          border-[1px] border-[#aaa9a9] z-10 rounded-lg md:right-[10%]"
          >
            <ul className="w-[100%] h-[100%] text-[17px] flex flex-col items-start justify-around py-[10px]">
              <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer" onClick={()=>navigate('/login')}>
                Login
              </li>
              <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer " onClick={handleLogOut}>
                Logout
              </li>
              <div className="w-[100%] h-[15px] bg-[#c1c0c0]"></div>
              <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer ">
                List your Home
              </li>
              <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer ">
                My Listing
              </li>
              <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer ">
                Check Booking
              </li>
            </ul>
          </div>}
        </div>
      </nav>

      {/* small screen me search bar neeche rageha, large screen me normal navbar me */}
      <div className="w-[100%] h-[60px] flex items-center justify-center block md:hidden">
        <div className="w-[80%] mx-4 relative ">
            <input
              type="text"
              placeholder="Any Where | Any Location | Any City"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-600 bg-white rounded-full p-1 hover:bg-gray-100">
              <FaSearch size={14} />
            </button>
          </div>
        </div>
      <nav className=" left-0 right-0 bg-white  border-t flex justify-start items-center p-2 z-50 overflow-auto md:justify-center px-[15px]">
        <div className="flex space-x-10">
          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600">
            <MdWhatshot size={22} />
            <span className="text-[10px]">Trending</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600">
            <GiFamilyHouse size={22} />
            <span className="text-[10px]">Villa</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600">
            <MdBedroomParent size={22} />
            <span className="text-[10px]">Rooms</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600 text-nowrap">
            <MdOutlinePool size={22} />
            <span className="text-[10px]">Pool House</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600">
            <GiWoodCabin size={22} />
            <span className="text-[10px]">Cabins</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600">
            <SiHomeassistantcommunitystore size={22} />
            <span className="text-[10px]">Shops</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600">
            <IoBedOutline size={22} />
            <span className="text-[10px]">PG</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600 text-nowrap">
            <FaTreeCity size={22} />
            <span className="text-[10px]">Farm House</span>
          </div>

          <div className="flex flex-col items-center text-gray-600 hover:text-pink-600">
            <BiBuildingHouse size={22} />
            <span className="text-[10px]">Flat</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
