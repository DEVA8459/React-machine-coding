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
          <div className="flex">
            <p className="text-white font-medium text-lg p-4">
              {`${user?.displayName}'s NETFLIX`}
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              className="w-10 rounded-full m-2 bg-white"
            />
          </div>

          <button
            className="bg-[#e50914] hover:bg-[#c11119] text-amber-200 w-2/4 px-4 py-2 rounded-2xl"
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
