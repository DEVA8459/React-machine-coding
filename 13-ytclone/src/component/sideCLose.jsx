
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { HiTrendingUp } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideCLose = () => {
   return (
      <div className="shadow-xl w-12 pt-2 font-semibold h-screen">
        <div  > 
          <ul >
            <Link to={"/"}>
            <li className="flex pl-2" ><FaHome className="pl-2 size-6"/></li></Link>
            <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/></li>
            <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> </li>
            <li className="flex pl-2"><FaHistory className="pl-2 size-6"/></li>
          </ul>
        </div>
        <div  className="pt-4"> 
          <ul >
            <li className="flex pl-2" ><FaHome className="pl-2 size-6"/></li>
            <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/></li>
            <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> </li>
            <li className="flex pl-2"><FaHistory className="pl-2 size-6"/></li>
          </ul>
        </div>
        <div className="pt-4"> 
          <ul >
            <li className="flex pl-2" ><FaHome className="pl-2 size-6"/></li>
            <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/></li>
            <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> </li>
            <li className="flex pl-2"><FaHistory className="pl-2 size-6"/></li>
          </ul>
        </div>
        <div className="pt-4"> 
          <ul >
            <li className="flex pl-2" ><FaHome className="pl-2 size-6"/></li>
            <li className="flex pl-2"> <SiYoutubeshorts className="pl-2 size-6"/></li>
            <li className="flex pl-2"><HiTrendingUp className="pl-2 size-6"/> </li>
            <li className="flex pl-2"><FaHistory className="pl-2 size-6"/></li>
          </ul>
        </div>
     
      </div>
    );
}
