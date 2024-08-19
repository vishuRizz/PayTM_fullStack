import React from "react";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between p-3 pb-0 ml-1 shadow-md">
        <div className="text-xl "> PennyPay </div>
        <div className="flex px-2 text-lg">
          <p> vishu </p>
          <span className="ml-3">
            <RxAvatar  size={30} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
