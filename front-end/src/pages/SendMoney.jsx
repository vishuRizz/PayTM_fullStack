import React from "react";
import { RxAvatar } from "react-icons/rx";

function SendMoney() {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-white place-content-center">
      <div className="w-[48vh] h-[40vh]  border-black rounded-lg bg-white p-2">
        <center className="items-center p-2 ">
          <h1>Send Money</h1>
        </center>
        <div className="px-2 mt-4 ">
          <div className="flex">
            <span className="mt-1">
              <RxAvatar color="green" size={30} />
            </span>
            <p className="py-2 pl-1 m-0 font-medium text-md"> Friend's Name </p>
          </div>
          <p className="ml-1">Amount (in Rs)</p>

          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Amount"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        </div>
        <div className="px-3 py-3">
          <button type="button" className="w-full btn btn-success">
            Send Money
          </button>
          <div className="flex justify-center"></div>
        </div>
      </div>
    </main>
  );
}

export default SendMoney;
