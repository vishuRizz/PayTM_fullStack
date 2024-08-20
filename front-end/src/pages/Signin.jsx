import React from "react";
import {useNavigate} from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-white place-content-center">
      <div className="w-[48vh] h-[50vh]  border-black rounded-lg bg-white">
        <center className="items-center p-2 ">
          <h1>Sign in</h1>
          <p className="text-slate-500">
            Enter your credentials to access your account
          </p>
        </center>
        <div className="px-2">
          <p className="py-2 pl-1 m-0 font-medium"> Email </p>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Vishu"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <p className="py-2 pl-1 m-0 font-medium"> Password </p>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Pratap"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
         
        </div>
        <div className="px-3 py-3">
          <button onClick={()=>{
            navigate("/dashboard")
          }} type="button" className="w-full btn btn-dark">
            Sign in
          </button>
          <div className="flex justify-center">
            <div className="cursor-pointer ">Don't have an account? </div>
            <div onClick={()=>{
              navigate("/signup")
            }} className="underline cursor-pointer"> Signup</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signin;
