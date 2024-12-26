import React from "react";
import UserIcon from "../../assets/user.svg"

export default function LoginBtn() {
  return (
    <div onClick={() => open("/login")} className="flex items-center justify-center mr-3">
      <img src={UserIcon} alt="User Icon" />
      <a className="px-2 font-bold text-base" href="">Մուտք</a>
    </div>
  );
}
