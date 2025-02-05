import Body from "./component/Body";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./component/Login";
import Browser from "./component/Browse";


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
