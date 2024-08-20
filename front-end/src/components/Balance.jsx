import axios from "axios";
import React, { useEffect, useState } from "react";

function Balance() {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      });
  });

  return (
    <div>
      <div className="flex items-center pt-3 pl-3 mt-2 text-xl">
        <p className="px-3 text-2xl"> Your Balance </p>
        <p className=" mt-[3px]">Rs {balance}</p>
      </div>
    </div>
  );
}

export default Balance;
