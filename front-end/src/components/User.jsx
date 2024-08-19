import React from "react";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function User({ name, id }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-2">
      <div className="flex">
        <span className="mt-1">
          {" "}
          <RxAvatar size={30} />{" "}
        </span>
        <p className="px-2 mt-2"> {name} </p>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/send?id=" + id + "&name=" + name);
          }}
          type="button"
          class="btn btn-dark"
        >
          Send Money
        </button>
      </div>
    </div>
  );
}

export default User;
