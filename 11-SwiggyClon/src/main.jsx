import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./component/Header.jsx";
import { Body } from "./component/Body.jsx";
import { Foooter } from "./component/Footer.jsx";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Body />
      </div>
      
      <Foooter/>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
