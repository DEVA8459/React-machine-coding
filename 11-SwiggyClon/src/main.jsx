import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./component/Header.jsx";
import { Body } from "./component/Body.jsx";

import { Provider, useSelector } from "react-redux";
import store from "./reducer/store.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { SearchComponent } from "./component/SearchComp.jsx";
import { Login } from "./component/login.jsx";
import { RestroDetail } from "./component/restaurentDetail/RestoDetail.jsx";
import { Cart } from "./component/cart/cart.jsx";

export const App = () => {
  const isCartVisible =useSelector(store=>store.cart.isVisible)
  return (
    <div >
      <Header />
      <Outlet style={{padding : "70px"}} />
      {isCartVisible && <Cart />}
      
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
      path:"/restaurents/:id",
      element:<RestroDetail/>
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
