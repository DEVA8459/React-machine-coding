import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate, } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/reducer/UserSlice";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import MobileHeadMenu from "./MobileHeadMenu";

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        {navigate("/browser")}
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full   z-10 bg-gradient-to-b from-black">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <Logo />
        <buttton onClick={() => setIsOpen(!isOpen)}>
          <CiMenuBurger className="size-15 text-white md:hidden" />
        </buttton>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "50%" : "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-full bg-black shadow-lg  z-40 p-6"
        >
          <div><buttton onClick={() => setIsOpen(!isOpen)}>
          <IoCloseSharp className="size-15 mr-40 text-white " />
        </buttton>
        <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              className="w-10 rounded-full m-2 bg-white"
            /></div>
          
          
          <MobileHeadMenu/>
        </motion.div>
        <HeaderMenu />
        
      </div>
    </div>
  );
};

export default Header;
