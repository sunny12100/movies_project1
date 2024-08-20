import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { login_bg } from "../utils/constants";
import Footer from "./footer";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const [EmailError, setEmailError] = useState(null);
  const [PasswordError, setPasswordError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!SignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    if (message == "Email is Not Valid") setEmailError("❌" + message);
    if (message == "Password is not valid") setPasswordError("❌" + message);
    if (message) return;
    //Sign Up Logic
    {
      !SignInForm
        ? createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setPasswordError(errorCode + errorMessage);
              // ..
            })
        : signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setPasswordError(errorCode + errorMessage);
            });
    }

    //Sign In Logic
  };

  return (
    <div>
      <Header />
      <div className="absolute z-5">
        <img
          className="h-screen object-cover md:w-screen "
          src={login_bg}
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute border-red-600 border-4 flex flex-col rounded-md opacity-100 text-white bg-[rgba(0,0,0,0.7)] w-[85%] md:w-1/3 mx-auto right-0 left-0 h-[75%] md:h-3/4 my-36 md:my-28"
      >
        <h1 className="text-[2rem] font-bold mx-14 md:mx-20 mt-8">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && (
          <input
            className="min-h-12 shadow-[0px_0px_6px_1px_rgba(0,0,0,0.3)] shadow-white min-w-4 mx-14 md:mx-20 mt-8 bg-transparent text-white border-white  rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="min-h-12 shadow-[0px_0px_6px_1px_rgba(0,0,0,0.3)] shadow-white min-w-4 mx-14 md:mx-20 mt-8 bg-transparent text-white border-white rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <p className="text-red-600 font-bold mx-20">{EmailError}</p>
        <input
          ref={password}
          className="min-h-12 shadow-[0px_0px_6px_1px_rgba(0,0,0,0.3)] shadow-white min-w-4 mx-14 md:mx-20 mt-6 bg-transparent text-white border-white rounded-md"
          type="text"
          placeholder="Password"
        />
        <p className="text-red-600 font-bold mx-14 md:mx-20">{PasswordError}</p>
        <button
          className="mt-10 mx-14 md:mx-20 rounded-md text-lg bg-red-600 min-w-4 min-h-12"
          onClick={handleButtonClick}
        >
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-10 text-white opacity-50 text-2xl mx-auto">OR</p>
        <p
          className="mx-14 md:mx-20 text-xl mt-8 text-white cursor-pointer hover:underline "
          onClick={toggleSignInForm}
        >
          {SignInForm
            ? "New to AnimeCineplex? Sign Up Now!"
            : "Already a User? Sign In Now!"}
        </p>
      </form>
      <div className="mt-[900px] md:mt-[730px] absolute">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
