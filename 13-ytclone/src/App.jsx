import { Header } from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainComponent from "./component/MainComponent";
import WatchPage from "./component/WatchPage";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainComponent />,
        },
        {
          path: "/Watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Header/>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
