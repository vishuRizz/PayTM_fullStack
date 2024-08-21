import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/v1/user/getuser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setName(response.data.firstName);
      })
      .catch((error) => {
        console.error(
          "Error fetching user:",
          error.response ? error.response.data : error.message
        );
      });
  });
  return (
    <div>
      <div className="flex justify-between p-3 pb-0 ml-1 shadow-md">
        <div className="text-xl "> PennyPay </div>
        <div className="flex px-2 text-lg">
          <p> Vishu </p>
          <span className="ml-3">
            <RxAvatar size={30} />
          </span>
          <div
            onClick={() => {
              navigate("/logout");
            }}
            className="px-2 mt-[1px] cursor-pointer"
          >
            <p>logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
