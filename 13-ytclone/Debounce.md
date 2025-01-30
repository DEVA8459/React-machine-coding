```jsx
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaYoutube } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/reducer/navSlice";
import { useEffect, useState } from "react";
import { YT_SEARCH_API } from "../constant/constant";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  

  //debouncing
  useEffect(() => {
    const timer =setTimeout(() => getSearchSuggestion(), 1000)
    return()=>{
      clearTimeout(timer)
    }  
  },[searchQuery]);

  const getSearchSuggestion = async () => {
    const response = await fetch(YT_SEARCH_API + searchQuery);
    const result = await response.json();
    console.log(result[1]);
    // return setSearchQuery(result)
  };
  return (
    <div className="grid grid-flow-col  shadow-lg h-20 ">
      <div className="flex  col-span-10  px-10 py-5 justify-center ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="size-8 w-1/2 border rounded-l-full"
        />
        <button className="size-8 rounded-r-full border bg-gray-200">
          <CiSearch className="size-7" />
        </button>
      </div>
      
    </div>
  );
};

```