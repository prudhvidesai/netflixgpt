import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { showGptPage } from "../utils/gptSlice";
import { languageOptions } from "./constants";
import { updateLanguage } from "../utils/languageSlice";
import { removeMovies } from '../utils/gptSlice'


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptbtnStat = useSelector((store) => store.gpt.gptpagestat);
  // const gpttitles = useSelector(store=>store.gpt.gptMovies)
  // const gptmoviesList= useSelector(store=>store.gpt.gptMovieResults)  
 

  //console.log(user);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
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
      return () => unsubscribe();
    });
  }, []);

  const handleGPTBtn = () => {
    dispatch(showGptPage());
    if(gptbtnStat===false){
      dispatch(removeMovies())
    }
  };

  const handleLanguage = (e) => {
    dispatch(updateLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-3 py-3 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between mr-40 ">
      <img
        className="w-[100px] md:w-[180px] mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-img"
      />
      {user && (
        <div className="mx-auto md:mx-0 flex justify-between md:w-[500px] w-[340px] align-middle mr-20">
          {user && (
            <p className="text-red-500 font-bold mt-7 mr-3">{user.displayName}</p>
          )}
          <div className="flex justify-between md:mt-0 -mt-4 mr-20">
            {gptbtnStat && (
              <select
                className="mt-[24px] rounded-lg md:w-[120px] md:h-[35px] mr-6 p-2 py-1 bg-red-500 text-white"
                onChange={handleLanguage}
              >
                {languageOptions.map((each) => (
                  <option value={each.identifier}>{each.name}</option>
                ))}
              </select>
            )}

            <button
              className=" w-[100px] h-[30px] text-sm mt-5 md:w-[120px] md:h-[40px] p-2 py-1 bg-red-500 text-white mr-3 rounded-lg"
              onClick={handleGPTBtn}
            >
              {gptbtnStat? "HomePage":"GPT Search"}
            </button>
            <button
              className="mt-5 md:w-[90px] md:h-[40px] p-2 py-1 ml-3 rounded-lg bg-red-500 text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
