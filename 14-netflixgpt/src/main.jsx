import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./utils/reducer/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App className="bg-black" />
  </Provider>
);
