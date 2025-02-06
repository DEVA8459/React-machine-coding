
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/reducer/UserSlice";
import { toggleSearchgpt } from "../utils/reducer/movieSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLnguage } from "../utils/reducer/configSlice";
import { lang } from "./../utils/LanguageConst";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile Menu Icons

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.movies.toggleGPT);
  const langKey = useSelector((store) => store.config.lang);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle GPT Search
  const handleGpt = () => {
    dispatch(toggleSearchgpt());
  };

  // Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Handle Language Change
  const handleLangChange = (e) => {
    dispatch(changeLnguage(e.target.value));
  };

  // Authentication Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full z-10 bg-gradient-to-b from-black">

      
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Left Section: Logo & GPT Button */}
        
        {/* logo */}
        <div className="flex items-center space-x-4">
          <img
            alt="logo"
            src="/assets/580b57fcd9996e24bc43c529.png"
            className="w-32 md:w-44"
          />
          <button
            className="bg-[#156422] hover:bg-[#26c111] text-white px-4 py-2 text-sm md:text-lg rounded-2xl"
            onClick={handleGpt}
          >
            {showGptSearch ? `${lang[langKey].button}` : "GPT Search"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop User Info (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-4">
          {showGptSearch && (
            <select
              className="bg-gray-600/70 text-white p-2 rounded-2xl"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {user && (
            <>
              <p className="text-white font-medium text-lg">
                {`${user?.displayName}'s NETFLIX`}
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                className="w-10 rounded-full"
              />
              <button
                className="bg-[#e50914] hover:bg-[#c11119] text-amber-200 px-4 py-2 rounded-2xl"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black py-4">
          {showGptSearch && (
            <select
              className="bg-gray-600/70 text-white p-2 rounded-2xl w-3/4"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {user && (
            <>
              <p className="text-white font-medium text-lg">
                {`${user?.displayName}'s NETFLIX`}
              </p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                className="w-10 rounded-full"
              />
              <button
                className="bg-[#e50914] hover:bg-[#c11119] text-amber-200 px-4 py-2 rounded-2xl"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
