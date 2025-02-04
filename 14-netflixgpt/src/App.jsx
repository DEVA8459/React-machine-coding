import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login";
import Browser from "./component/Browse";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/reducer/UserSlice";

function App() {
  const dispatch = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <>
      <div className="font-bold">
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
