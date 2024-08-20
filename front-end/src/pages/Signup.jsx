import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-white place-content-center">
      <div className="w-[48vh] h-[68vh]  border-black rounded-lg bg-white">
        <center className="items-center p-2 ">
          <h1>Sign up</h1>
          <p className="text-slate-500">
            Enter your information to create an account
          </p>
        </center>
        <div className="px-2">
          <p className="py-2 pl-1 m-0 font-medium"> First Name </p>
          <div class="input-group flex-nowrap">
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="Vishu"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <p className="py-2 pl-1 m-0 font-medium"> Last Name </p>
          <div class="input-group flex-nowrap">
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="Pratap"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <p className="py-2 pl-1 m-0 font-medium"> Email </p>
          <div class="input-group flex-nowrap">
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="vishurizz0@gmail.com"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <p className="py-2 pl-1 m-0 font-medium"> Password </p>
          <div className="input-group flex-nowrap">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              class="form-control"
              placeholder="ilovexyz"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="px-3 py-3">
          <button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastName,
                  password,
                }
              );
              // console.log("this is the response bc" ,response.data.token)
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            type="button"
            className="w-full btn btn-dark"
          >
            Sign up
          </button>
          <div className="flex justify-center">
            <div className="cursor-pointer ">Already have an account? </div>
            <div
              onClick={() => {
                //  window.location.href = "/signin"
                navigate("/signin");
              }}
              className="underline cursor-pointer"
            >
              {" "}
              Signin
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Signup;
