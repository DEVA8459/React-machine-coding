import Body from "./component/Body";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./component/Login";
import Browser from "./component/Browse";
import { useEffect } from "react";
import { deleteUser, onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/Firebase";
import {useDispatch} from "react-redux"
import { addUser } from "./utils/reducer/UserSlice";

function App() {

  const dispatch =useDispatch()

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

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const{ uid ,email} = user
        dispatch(addUser({uid:uid ,email:email}))
       

        
      } else {
        // User is signed out
        // ...
        dispatch(deleteUser());
        

      }
    });
  },[])
  return (
    <>
      <div className="font-bold">
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
