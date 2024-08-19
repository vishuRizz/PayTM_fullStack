import React from "react";
import { RxAvatar } from "react-icons/rx";

function User({name}) {
  return (
    <div className="flex justify-between p-2">
    <div className="flex">
     <span className="mt-1"> <RxAvatar size={30}/> </span>
     <p className="px-2 mt-2"> {name} </p>
      </div>
      <div>
      <button type="button" class="btn btn-dark">Send Money</button>
      </div>
    </div>
  );
}

export default User;
