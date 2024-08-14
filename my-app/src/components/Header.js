import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("User signed out");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between ">
      <img
        className="h-25 w-40 mx-20 py-6 "
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      />
      {user && (
        <div className="flex py-6 mx-10">
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
