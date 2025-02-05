import { ValidatingForm } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import Header from "./Header";
import { useState } from "react";

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

  const [signin, setsignin] = useState(false);
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = ValidatingForm(ogFormData, signin);
    if (!isValidate) {
      setError({});
      console.log("Form not submitted due to validation error");
    } else {
      setError(isValidate);
      if (Object.keys(isValidate).length === 0) {
        if (signin) {
          createUserWithEmailAndPassword(
            auth,
            ogFormData.email,
            ogFormData.password
          )
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: ogFormData.fullName,
                photoURL: "https://example.com/jane-q-user/profile.jpg",
              })
                .then(() => {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                    })
                  );
                })
                .catch((error) => setError({ general: error.message }));
            })
            .catch((error) => {
              setError({ email: error.message, password: error.message });
              console.error("Sign up error", error);
            });
        } else {
          signInWithEmailAndPassword(
            auth,
            ogFormData.email,
            ogFormData.password
          )
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) =>
              setError({ email: error.message, password: error.message })
            );
        }
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOgformData({ ...ogFormData, [name]: value });
    setError((prev) => ({ ...prev, [name]: "", formData: "" }));
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          className="opacity-50 w-full h-full object-cover"
          alt="Background"
        />
      </div>
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-black/80 p-6 md:p-10 rounded-lg">
          <p className="text-white text-3xl font-bold text-center mb-6">
            {signin ? "Sign Up" : "Sign In"}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {signin && (
              <>
                <input
                  type="text"
                  name="fullName"
                  value={ogFormData.fullName}
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="p-3 w-full border text-white border-gray-500 rounded-lg bg-[#141210]/75 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {error.fullName && (
                  <p className="text-red-500 text-sm">{error.fullName}</p>
                )}
                <input
                  type="text"
                  name="contact"
                  value={ogFormData.contact}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="p-3 w-full border text-white border-gray-500 rounded-lg bg-[#141210]/75 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {error.contact && (
                  <p className="text-red-500 text-sm">{error.contact}</p>
                )}
              </>
            )}

            <input
              type="email"
              name="email"
              value={ogFormData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 w-full border text-white border-gray-500 rounded-lg bg-[#141210]/75 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={ogFormData.password}
              onChange={handleChange}
              className="p-3 w-full border text-white border-gray-500 rounded-lg bg-[#141210]/75 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}

            {signin && (
              <>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={ogFormData.confirmPassword}
                  onChange={handleChange}
                  className="p-3 w-full border text-white border-gray-500 rounded-lg bg-[#141210]/75 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {error.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {error.confirmPassword}
                  </p>
                )}
              </>
            )}

            <button className="w-full p-3 bg-[#e50914] hover:bg-[#c11119] rounded-lg text-white text-lg font-semibold">
              {signin ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <p className="text-gray-400 text-center mt-4">
            {signin ? "Already have an account?" : "New to Netflix?"}
            <span
              className="text-white font-semibold cursor-pointer ml-1"
              onClick={() => {
                setsignin(!signin);
                setOgformData({
                  fullName: "",
                  contact: "",
                  password: "",
                  email: "",
                  confirmPassword: "",
                });
                setError({});
              }}
            >
              {signin ? "Login" : "Sign up now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
