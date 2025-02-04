import { ValidatingForm } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/reducer/UserSlice";
const Login = () => {
  const [ogFormData, setOgformData] = useState({
    fullName: "",
    contact: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const [signin, setsignin] = useState(false, { ogFormData });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = ValidatingForm(ogFormData, signin);
    console.log(isValidate);
    if (!isValidate) {
      setError({});
      console.log("from not submitted due to validation error");
    } else {
      setError(isValidate);
      console.log("form Submitted succesfully");
      if (Object.keys(isValidate).length === 0) {
        console.log("hey buddy");
        if (signin) {
          createUserWithEmailAndPassword(
            auth,
            ogFormData.email,
            ogFormData.password
          )
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log("user craetd", user);
              updateProfile(user, {
                displayName: ogFormData.fullName,
                photoURL: "https://example.com/jane-q-user/profile.jpg",
              })
                .then(() => {
                  // Profile updated!
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                    })
                  );
                  navigate("/browser");
                  // ...
                })
                .catch((error) => {
                  // An error occurred
                  // ...
                  setError(error.message);
                });
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError({
                email: errorMessage + " " + errorCode,
                password: errorMessage,
              });
              console.error("sign up error");
              // ..
            });
        } else {
          signInWithEmailAndPassword(
            auth,
            ogFormData.email,
            ogFormData.password
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("use succesfully sign in ", user);
              // ...
              navigate("/browser");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError({
                email: errorMessage + " " + errorCode,
                password: errorMessage,
              });
              console.error("login error ", errorMessage);
            });
        }
      } else {
        console.log("valiadte kmc", ogFormData);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOgformData({
      ...ogFormData,
      [name]: value,
    });
    setError((preverrors) => ({ ...preverrors, [name]: " ", formData: "" }));
  };
  return (
    <div>
      <Header />
      <div className="absolute bg-black  overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          className="opacity-55 scale-[1.35]  mt-35 ml-65 overflow-hidden"
        />
      </div>
      <div className="absolute p-12 w-4/12 my-22 mx-auto right-0 left-0 bg-black/80 rounded-lg ">
        <p className="text-white text-3xl p-2 m-2 mb-5   ">
          {signin ? "Sign up" : "Sign In"}
        </p>
        {
          <form onSubmit={handleSubmit}>
            {signin && (
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={ogFormData.fullName}
                  placeholder="full Name"
                  onChange={handleChange}
                  className="p-5 m-5 border w-11/12 text-white border-white rounded-lg bg-[#141210]/75"
                />
                <p className="text-red-600 text-sm font-medium ml-6">
                  {error.fullName}
                </p>
                <input
                  type="text"
                  name="contact"
                  value={ogFormData.contact}
                  onChange={handleChange}
                  placeholder="contact-number"
                  className="p-5 m-5 border w-11/12 text-white border-white rounded-lg bg-[#141210]/75 "
                />
                <p className="text-red-600 text-sm font-medium ml-6">
                  {error.contact}
                </p>
              </div>
            )}

            <input
              type="text"
              name="email"
              value={ogFormData.email}
              onChange={handleChange}
              placeholder="email"
              className="p-5 m-5 border w-11/12 text-white border-white rounded-lg bg-[#141210]/75 "
            />
            {error.email && (
              <p className="text-red-600 text-sm font-medium ml-6">
                {error.email}
              </p>
            )}
            <input
              type="text"
              name="password"
              placeholder="password"
              value={ogFormData.password}
              onChange={handleChange}
              className="p-5 m-5 border text-white border-white w-11/12 rounded-lg  bg-[#141210]/75"
            />
            {error.password && (
              <p className="text-red-600 text-sm font-medium ml-6">
                {error.password}
              </p>
            )}
            {signin && (
              <div>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="confirm Password"
                  value={ogFormData.confirmPassword}
                  onChange={handleChange}
                  className="p-5 m-5 border text-white border-white w-11/12 rounded-lg  bg-[#141210]/75"
                />
                {error.confirmPassword && (
                  <p className="text-red-600 text-sm font-medium ml-6">
                    {error.confirmPassword}
                  </p>
                )}
              </div>
            )}

            <button className="p-2 m-5 w-11/12 bg-[#e50914] hover:bg-[#c11119] rounded-lg text-white text-lg">
              {signin ? "Sign up" : "Sign in "}
            </button>
          </form>
        }
        <p className="text-gray-500 p-3 text-l text-w">
          {signin ? "Allready a user ? " : " New to Netflix? "}
          <span
            className="text-white cursor-pointer"
            onClick={() => (
              setsignin(!signin),
              setOgformData(
                {
                  fullName: "",
                  contact: "",
                  password: "",
                  email: "",
                  confrimpassword: "",
                },
                setError({})
              )
            )}
          >
            {signin ? "login " : "Sign up now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
