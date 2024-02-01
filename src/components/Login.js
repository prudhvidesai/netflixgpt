import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignin, setisSignin] = useState(true);

  const dispatch = useDispatch()

  //const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState(null);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const toggleSignup = () => {
    setisSignin(!isSignin);
  };

  const handleValidation = () => {
    const msg = checkValidation(email.current.value, password.current.value);
    setErrMsg(msg);

    if (msg) return;

    if (!isSignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      
            
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          //console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //console.log(errorCode + ":" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          //console.log(user);
          // ...
        })
        .catch((error) => {
          //const errorCode = error.code;
          const errorMessage = error.message;
          //console.log(errorMessage);
        });
    }
  };
  return (
    <div  className="h-screen object-cover" >
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="img"
          className="bg-opacity-100 h-screen w-screen object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white rounded-lg p-10 bg-black bg-opacity-80 w-[300px] my-40 mx-auto left-0 right-0 flex flex-col justify-center align-middle"
      >
        <h1 className="font-bold text-2xl m-2">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            ref={name}
            placeholder="First Name"
            className="py-1.5  px-2 m-2 mb-3 outline-none bg-gray-600"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="py-1.5 px-2 m-2 mb-3 my-2outline-none bg-gray-600 outline-none"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="py-1.5 px-2 m-2 mb-3 outline-none bg-gray-600"
        />
        <p className="font-bold text-red-700 p-2">{errMsg}</p>
        <button
          className="rounded-lg w-[205px] p-2 py-1 m-2 mt-4 mb-3 bg-red-600 text-white"
          onClick={handleValidation}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-3 mt-2 text-[14px] cursor-pointer"
          onClick={toggleSignup}
        >
          {isSignin
            ? "New to NetFlix? Sign up Now"
            : "Already User Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
