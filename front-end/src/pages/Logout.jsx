import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  return (
    <center className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-red-200 to-white place-content-center">
      <div className="flex items-center justify-center w-40 h-40 bg-white shadow-sm border-1">
        <h1
          onClick={async () => {
            const isLogout = localStorage.removeItem("token");
            if (isLogout) {
              alert("user logged out");
              navigate("/signin");
            } else {
              alert("no user was logged in");
              navigate("/signup");
            }
          }}
          className="cursor-pointer"
        >
          logout
        </h1>
      </div>
    </center>
  );
}

export default Logout;
