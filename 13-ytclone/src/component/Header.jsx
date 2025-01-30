import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/reducer/navSlice";
import { useEffect, useState } from "react";
import { YT_SEARCH_API } from "../constant/constant";
import { cacheResults } from "../utils/reducer/searchSlice";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleSideBar());
  };

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (searchCache[searchQuery]) {
          setSuggestion(searchCache[searchQuery]);
        } else {
          getSearchSuggestion();
        }
      },

      200
    );
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const response = await fetch(YT_SEARCH_API + searchQuery);
    const result = await response.json();
    setSuggestion(result[1]);

    // updating the cache
    dispatch(cacheResults({
      [searchQuery] :result[1]
    }));
  };
  return (
    <div className="grid grid-flow-col  shadow-lg h-20">
      <div className="flex col-span-1 py-5">
        <div className="flex pl-4 " onClick={() => handleToggle()}>
          <CiMenuBurger className="size-8 " />
        </div>

        <div className="flex pl-4 ">
          <a href="/" className="flex pl-4">
            <div>
              <FaYoutube style={{ color: "#ff0033" }} className="size-8" />
            </div>
            <div className="text-xl font-bold ">YouTube</div>
          </a>
        </div>
      </div>
      <div className="col-span-10">
        <div className="flex  px-10 mt-6 justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            className="size-8 w-8/12 border rounded-l-full p-3"
          />
          <button className="size-8 rounded-r-full border bg-gray-200">
            <CiSearch className="size-7" />
          </button>
        </div>
        {showSuggestion && (
          <div className=" absolute  w-[37.25rem] bg-white px-4 ml-[11rem]  rounded-xl shadow-lg  ">
            <ul>
              {suggestion.map((i) => (
                <li key={i} className="  hover:bg-gray-200 p-1">
                  🔎 {i}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2 px-10 py-5 ">
        <FaRegUser className="size-6" />
      </div>
    </div>
  );
};
