import { Link } from "react-router-dom";
import "../../src/style/Navbar.css";
export const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <img src="../../pngegg.png" alt="logo" />
          </a>
        </div>
        <div>
          <Link to="/search">
            <span>🔎Search </span>
          </Link>
        </div>
        <ul className="navbar-links">
          <li>Contact</li>
          <li>Cart</li>
          <Link to="/login"><li>login</li></Link>
          
        </ul>
      </div>
    </header>
  );
};
