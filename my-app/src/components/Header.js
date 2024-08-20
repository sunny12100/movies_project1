import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo_main from "../utils/images/logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import SignOutPopUp from "./SignOutPopUp";

const Header = ({ toggle, isAnime, toggleSearch, isPlaying, movieSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("User signed out");
        setShowModal(false);
      })
      .catch((error) => {
        // An error happened.
        // console.error("Error signing out:", error);
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
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between  ">
      <img className="w-32 md:mx-20 mx-5 " src={logo_main} alt="logo" />
      {user && (
        <div className="flex py-6 md:mx-10 mr-2">
          {!isPlaying ? (
            <>
              {!movieSearch && (
                <button
                  onClick={toggle}
                  className="h-10 mr-2 md:mr-3 rounded-lg mt-3 w-24 md:w-32 font-bold bg-yellow-400 hover:bg-yellow-300 text-black"
                >
                  {isAnime ? "Movie" : "Anime"}
                </button>
              )}
              <button
                onClick={toggleSearch}
                className="h-10  rounded-lg mt-3 w-28 md:w-32 font-bold bg-orange-400 hover:bg-orange-300 text-black"
              >
                {movieSearch ? "Home" : "CinePlexAI"}
              </button>
            </>
          ) : (
            <></>
          )}

          <img
            className="hidden md:block h-16 mx-1"
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
            alt="user-icon"
          />
          <img
            onClick={() => setShowModal(true)}
            className="w-8 h-10 mt-3 ml-2 md:mt-0 md:ml-0 md:w-20 md:h-16 cursor-pointer"
            src="https://www.freeiconspng.com/uploads/sign-out-logout-icon-0.png"
            alt="signout"
          />
          {showModal && (
            <SignOutPopUp
              onConfirm={handleSignOut}
              onCancel={() => setShowModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
