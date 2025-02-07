import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLnguage } from "../utils/reducer/configSlice";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";

const MobileHeadMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.movies.toggleGPT);
  const handleLangChange = (e) => {
    dispatch(changeLnguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className=" flex  flex-col md:hidden">
      {showGptSearch && (
        <select
          className="bg-gray-600/70 w-1/4 text-white p-2 rounded-2xl"
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
          <div className="md:flex ">
            <p className="text-white font-medium text-sm p-4">
              {`${user?.displayName}'s NETFLIX`}
            </p>
            
          </div>

          <button
            className="bg-[#e50914] hover:bg-[#c11119] text-amber-200 w-1/4 px-4 py-2 rounded-2xl"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default MobileHeadMenu;
