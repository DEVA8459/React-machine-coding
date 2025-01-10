import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./component/Header.jsx";
import { Body } from "./component/Body.jsx";
import { Foooter } from "./component/Footer.jsx";
import { Provider } from "react-redux";
import store from "./reducer/store.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { SearchComponent } from "./component/SearchComp.jsx";
import { Login } from "./component/login.jsx";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet style={{padding : "70px"}} />
      <Foooter />
    </div>
  );
};
const appRouter = createBrowserRouter([{
  path: "/",
  element: (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  children: [
    {
      path: "/",
      element: <Body />,
    },
    {
      path:"/search",
      element:<SearchComponent />
    },
    {
      path:"/login",
      element:<Login />
    }
  ],
}]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
