import React from "react";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import LoginBtn from "./LoginBtn";
import Button from "./../Button";

export default function Header({ onlyLogo }) {
  return (
    <div className="h-24 flex items-center  justify-center border-b fixed top-0 left-0 z-50 bg-white w-screen">
      <Logo />
      <MenuBar />
      <div className="bg-slate-400 w-[1px] h-11 mx-5"></div>
      <LoginBtn />
      <Button color={"violet"} size={"large"}>
        Միացի՛ր հիմա
      </Button>
    </div>
  );
}
