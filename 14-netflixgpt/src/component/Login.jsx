import { ValidatingForm } from "../utils/Validation";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/Firebase";
import Header from "./Header";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signin, setsignin] = useState(true);
  const [error, setError] = useState({ email: "", password: "" });
  const navigate =useNavigate()

  const emailref = useRef(null);
  const passwordref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: emailref.current.value,
      password: passwordref.current.value,
    };

    const isValid = ValidatingForm(formData.email, formData.password);

    if (isValid.email || isValid.password) {
      setError(isValid);
      console.log("form NOT Submitted");
    } else {
      setError({ email: "", password: "" });
      console.log("from  Submitted", formData);
      if (signin) {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("user craetd" ,user);
            // ...

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({email:errorMessage +" "+ errorCode ,password :errorMessage})
            console.error("sign up error")
            // ..
          });
      }else{
        signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("use succesfully sign in " ,user)
          // ...
          navigate("/browser")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError({email:errorMessage +" "+ errorCode ,password :errorMessage})
          console.error("login error " ,errorMessage)
        });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg" />
      </div>
      <div className="absolute p-12 w-4/12 my-36 mx-auto right-0 left-0 bg-black/80 rounded-lg">
        <p className="text-white text-3xl p-2 m-2 mb-5  ">
          {signin ? "Sign up" : "Login"}
        </p>
        {
          <form onSubmit={handleSubmit}>
            {signin && (
              <div>
                <input
                  type="text"
                  placeholder="full Name"
                  className="p-2 m-2 border w-11/12 text-white border-white rounded-lg bg-[#141210]/75 "
                />
                <input
                  type="text"
                  name="email"
                  placeholder="contact-number"
                  className="p-2 m-2 border w-11/12 text-white border-white rounded-lg bg-[#141210]/75 "
                />
              </div>
            )}

            <input
              ref={emailref}
              type="text"
              name="email"
              placeholder="email"
              className="p-2 m-2 border w-11/12 text-white border-white rounded-lg bg-[#141210]/75 "
            />
            {error.email && <p className="text-red-600">{error.email}</p>}
            <input
              ref={passwordref}
              type="text"
              name="password"
              placeholder="password"
              className="p-2 m-2 border text-white border-white w-11/12 rounded-lg  bg-[#141210]/75"
            />
            {error.password && <p className="text-red-600">{error.password}</p>}
            {signin && (
              <input
                type="text"
                name="password"
                placeholder="confirm password"
                className="p-2 m-2 border text-white border-white w-11/12 rounded-lg  bg-[#141210]/75"
              />
            )}
            <button className="p-2 m-2 w-11/12 bg-[#e50914] hover:bg-[#c11119] rounded-lg">
              {signin ? "Sign up" : "Login"}
            </button>
          </form>
        }
        <p className="text-gray-500 p-4 text-l">
          {signin ? "Allready a user ? " : " New to Netflix? "}
          <span
            className="text-white cursor-pointer"
            onClick={() => setsignin(!signin)}
          >
            {signin ? "login " : "Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
