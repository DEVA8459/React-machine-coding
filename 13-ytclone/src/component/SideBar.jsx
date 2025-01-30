import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { HiTrendingUp } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";
import { useSelector } from "react-redux";
import {SideCLose} from "./sideCLose";
import { Link } from "react-router-dom";

const SideBar = () => {
    const isSideBarOpen=useSelector((store)=>store.nav.isSideBarOpen)

  return (
    !isSideBarOpen ?
    <div className="shadow-xl  pt-2 font-semibold h-screen ">
      <div  > 
        <ul >
          <Link to={"/"} >
          <li className="flex pl-2" ><FaHome className="pl-2 size-6"/><p className="px-2 ">Home</p></li></Link>
          <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/><p className="px-2 ">Shorts</p></li>
          <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> <p className="px-2 ">Trending</p></li>
          <li className="flex pl-2"><FaHistory className="pl-2 size-6"/> <p className="px-2 ">History</p></li>
        </ul>
      </div>
      <div className="pt-4">
      <ul >
          <li className="flex pl-2" ><FaHome className="pl-2 size-6"/><p className="px-2 ">Home</p></li>
          <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/><p className="px-2 ">Shorts</p></li>
          <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> <p className="px-2 ">Trending</p></li>
          <li className="flex pl-2"><FaHistory className="pl-2 size-6"/> <p className="px-2 ">History</p></li>
        </ul>
      </div>
      <div className="pt-4">
      <ul >
          <li className="flex pl-2" ><FaHome className="pl-2 size-6"/><p className="px-2 ">Home</p></li>
          <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/><p className="px-2 ">Shorts</p></li>
          <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> <p className="px-2 ">Trending</p></li>
          <li className="flex pl-2"><FaHistory className="pl-2 size-6"/> <p className="px-2 ">History</p></li>
        </ul>
      </div>
      <div className="pt-4">
      <ul >
          <li className="flex pl-2" ><FaHome className="pl-2 size-6"/><p className="px-2 ">Home</p></li>
          <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/><p className="px-2 ">Shorts</p></li>
          <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> <p className="px-2 ">Trending</p></li>
          <li className="flex pl-2"><FaHistory className="pl-2 size-6"/> <p className="px-2 ">History</p></li>
        </ul>
      </div>
    </div> :<SideCLose /> 
  );
};

export default SideBar;
