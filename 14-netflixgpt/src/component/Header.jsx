import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/reducer/UserSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch =useDispatch()

  const handleSigOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser())
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>
      <div className="absolute  bg-gradient-to-b from-black w-screen z-10 flex justify-between items-center">
        <img
          alt="thab"
          src="/assets/580b57fcd9996e24bc43c529.png"
          className="w-52 ml-36 "
        />
        {user && <div className="flex p-3 mr-6 items-center">
          <div><p>{`${user?.displayName}'s netFLix `}</p></div>
          
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            className="w-10 m-2 "
          />
          <button
            className="bg-[#e50914] hover:bg-[#c11119] text-amber-200 p-2 m-2  rounded-2xl"
            onClick={handleSigOut}
          >
            signout
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Header;
