import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";

const Browser = () => {
  const navigate = useNavigate();

  const handleSigOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <Header />
      </div>

      <div >
        <img src="" />
        <div className="bg-red-400  text-white mt-80 ml-20">
          <button onClick={handleSigOut}>signout</button>
        </div>
      </div>
    </div>
  );
};

export default Browser;
