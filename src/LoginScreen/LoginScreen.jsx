import React, { useState } from "react";
import SigninScreen from "../Sign in screen/SigninScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div
      className="relative h-full  "
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/21ce579d-58aa-484a-aa96-fe1742b6f9c8/PK-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <img
          className="w-[150px] fixed left-0 object-contain pl-[20px]"
          src="/Netflix.png"
          alt=""
        />

        <button
          onClick={() => setSignIn(true)}
          className="fixed right-[20px] py-[6px] px-[20px] rounded-md font-semibold  top-4 text-[1rem] text-white bg-[#C00812] "
        >
          Sign in
        </button>
        <div
          className="w-full h-screen z-[1 "
          style={{
            background: " rgba(0, 0, 0, 0.4)",
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
      </div>
      <div
        className={`z-[1] text-white  p-[20px] absolute  ${
          signIn ? "top-[3%] zero:top-[20%]" : "top-[30%]"
        } left-0 right-0 mx-auto text-center `}
      >
        {signIn ? (
          <SigninScreen />
        ) : (
          <>
            <h1 className="text-[3.125rem] zero:text-[2.5rem] mb-[20px]">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="text-[2rem] zero:text-[1.5rem] mb-[30px] font-normal">
              Watch anywhere. Cancel anytime.
            </h2>
            <h3 className="text-[1.3rem] zero:text-[0.9rem] font-normal">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="m-[20px]">
              <form>
                <input
                  className="bg-white py-[10px] px-[20px] w-[400px] zero:w-[300px] mx-w-[600px]  mt-[20px] zero:mt-[10px] mobile:mt-[10px] "
                  type="email"
                  placeholder="Email address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="bg-[#E50914] py-[10px] px-[20px] w-[150px] zero:w-[300px] mobile:w-[200px]  mt-[20px] zero:mt-[10px] mobile:mt-[10px] "
                  type="submit"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

{
  /*<img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/21ce579d-58aa-484a-aa96-fe1742b6f9c8/PK-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />*/
}
