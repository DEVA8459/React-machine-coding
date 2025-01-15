import { Link } from "react-router-dom";
import "../../src/style/Header.css";
import { useDispatch } from "react-redux";
import { toggleCart } from "../reducer/cartSlice";
import { LuSearch } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src="../../pngegg.png" alt="logo" />
        </a>
      </div>
      <div>
        <Link to="/search">
          <div className="nav-search">
            <LuSearch />
            <p>Search </p>
          </div>
        </Link>
      </div>
      <div className="links">
        <div className="nav-cart">
          <div onClick={() => dispatch(toggleCart())}>
            <FaCartPlus />
          </div>
        </div>
        <div className="nav-signIn">
          <Link to="/login" className="nav-signIn">
            <FaRegUser />
            <p>Sign-in</p>
          </Link>
        </div>

        <div className="contact">
          <p>Contact</p>
        </div>
      </div>
    </header>
  );
};
