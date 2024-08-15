import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

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

    createUserWithEmailAndPassword(
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
      });

    //Sign In Logic
    signInWithEmailAndPassword(
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
  };

  return (
    <div>
      <Header />
      <div className="absolute z-5">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col rounded-md opacity-100 text-white bg-[rgba(0,0,0,0.7)] w-1/3 mx-auto right-0 left-0 h-3/4 my-28"
      >
        <h1 className="text-[2rem] font-bold mx-20 mt-8">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && (
          <input
            className="min-h-12 min-w-4 mx-20 mt-8 bg-transparent text-white border-white rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="min-h-12 min-w-4 mx-20 mt-8 bg-transparent text-white border-white rounded-md"
          type="text"
          placeholder="Email Address"
        />
        <p className="text-red-600 font-bold mx-20">{EmailError}</p>
        <input
          ref={password}
          className="min-h-12 min-w-4 mx-20 mt-6 bg-transparent text-white border-white rounded-md"
          type="text"
          placeholder="Password"
        />
        <p className="text-red-600 font-bold mx-20">{PasswordError}</p>
        <button
          className="mt-10 mx-20 rounded-md text-lg bg-red-600 min-w-4 min-h-12"
          onClick={handleButtonClick}
        >
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-10 text-white opacity-50 text-2xl mx-auto">OR</p>
        <p
          className="mx-20 text-xl mt-8 text-white cursor-pointer hover:underline "
          onClick={toggleSignInForm}
        >
          {SignInForm
            ? "New to AnimeCineplex? Sign Up Now!"
            : "Already a User? Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
