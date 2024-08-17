import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo_main from "../utils/images/logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = ({ toggle, isAnime }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        console.log("User signed out");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="h-26 w-44 mx-20  " src={logo_main} alt="logo" />
      {user && (
        <div className="flex py-6 mx-10">
          <button onClick={toggle} className="h-10 w-32 bg-red-700 text-white">
            {isAnime ? "Movie" : "Anime"}
          </button>
          <img
            className="w-26 h-16 mx-5"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
            alt="user-icon"
          />
          <img
            onClick={handleSignOut}
            className="w-26 h-16 cursor-pointer"
            src="https://www.freeiconspng.com/uploads/sign-out-logout-icon-0.png"
            alt="signout"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
