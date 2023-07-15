import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const Navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div
      className={`nav fixed top-0 p-[20px] w-full h-[65px] ease-in  transition-all duration-[0.8s] z-[1] ${
        show && "bg-black"
      }`}
    >
      <div className=" flex justify-between ">
        <img
          onClick={() => Navigate("/")}
          className=" fixed left-0 cursor-pointer pl-[20px] w-[80px] top-[13px] object-contain"
          src="/Netflix.png"
          alt=""
        />

        <img
          onClick={() => Navigate("/profile")}
          className=" fixed right-[20px] w-[30px] cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
