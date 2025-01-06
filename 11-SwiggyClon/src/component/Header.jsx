import "../../src/style/Navbar.css";
export const Header = () => {
  return (
    <header className="navbar" >
      <div className="navbar-container">
        <div className="logo">
            <a href="/">
                <img src="../../pngegg.png" alt="logo"/>
            </a>
        </div>
        <div>
            <span>🔎Search </span>
        </div>
        <ul className="navbar-links">
          <li>Contact</li>
          <li>Cart</li>
          <li>login</li>
        </ul>
      </div>
    </header>
  );
};
