import React, { useRef } from "react";
import { auth, provider } from "../Firebase";
import GoogleIcon from "@mui/icons-material/Google";

function SigninScreen() {
  const EmailRef = useRef(null);
  const PassRef = useRef(null);

  const Regester = (e) => {
    e.preventDefault();
    auth

      .createUserWithEmailAndPassword(
        EmailRef.current.value,
        PassRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const Singin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(EmailRef.current.value, PassRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const google = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div
      className="max-w-[400px] px-[40px]  py-[20px] mx-auto "
      style={{ background: " rgba(0, 0, 0, 0.85)" }}
    >
      <form className="flex flex-col">
        <h1 className="text-left text-lg mb-[25px]">Sign In</h1>
        <input
          ref={EmailRef}
          type="email"
          placeholder="Email"
          className="mb-[14px] outline-0 h-[40px] py-[5px] px-[15px] text-black rounded-md border-none "
        />
        <input
          ref={PassRef}
          type="password"
          placeholder="Password"
          className="mb-[14px] outline-0 h-[40px]  py-[5px] px-[15px] text-black rounded-md border-none"
        />
        <button
          onClick={Singin}
          type="submit"
          className="  font-bold px-[2em] rounded-md cursor-pointer  mt-[20px]  bg-[#e50914] border-[#ff0a16] text-white h-[50px] text-[1rem] "
        >
          Sign In
        </button>
        <button
          onClick={google}
          type="submit"
          className=" zero:hidden font-bold px-[2em] rounded-md cursor-pointer  mt-[20px]  bg-[#76ac47] border-[#ff0a16] text-white h-[50px] text-[1rem] "
        >
          <GoogleIcon className="mr-[10px] " />
          Sign In With Google
        </button>

        <div>
          <h4 className="text-left mt-[20px]">
            <span className="text-gray-400">New to Netflix?</span>{" "}
            <span
              className="hover:cursor-pointer hover:underline"
              onClick={Regester}
            >
              Sign up now.
            </span>
          </h4>
        </div>

        <button
          onClick={google}
          type="submit"
          className=" zero:hidden font-bold px-[2em] rounded-md cursor-pointer  mt-[20px]  bg-[#3617fd] border-[#ff0a16] text-white h-[50px] text-[1rem] "
        >
          <GoogleIcon className="mr-[10px] " />
          continue With Google
        </button>
      </form>
      <h4 className="text-left mt-[20px]">
        <span className="text-gray-400">This page is protected by Google</span>{" "}
        <span className="hover:cursor-pointer hover:underline">
          Privacy Policy
        </span>{" "}
        and{" "}
        <span className="hover:cursor-pointer hover:underline">
          Terms of Service
        </span>
      </h4>
    </div>
  );
}

export default SigninScreen;
