import Body from "./component/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./component/Login";
import Browser from "./component/Browse";
import DisplayPage from "./component/displayPage";


function App() {
 
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browser",
          element: <Browser />,
        },
        {
          path: "/displaypage/:id",
          element: <DisplayPage />,
        },
      ],
    },
  ]);

 
  return (
    <>
      <div >
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
