import { useDispatch, useSelector } from "react-redux";
import { toggleSearchgpt } from "../utils/reducer/movieSlice";
import { lang } from "../utils/LanguageConst";

const Logo = () => {
  const dispatch = useDispatch();
  const handleGpt = () => {
    dispatch(toggleSearchgpt());
  };
  const showGptSearch = useSelector((store) => store.movies.toggleGPT);
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex items-center space-x-4">
      <a href="/browser"><img
        alt="logo"
        src="/assets/580b57fcd9996e24bc43c529.png"
        className="w-32 md:w-44"
      /></a>
      
      <button
        className="bg-[#156422] hover:bg-[#26c111] text-white px-4 py-2 text-sm md:text-lg rounded-2xl"
        onClick={handleGpt}
      >
        {showGptSearch ? `${lang[langKey].button}` : "GPT Search"}
      </button>
    </div>
  );
};

export default Logo;
