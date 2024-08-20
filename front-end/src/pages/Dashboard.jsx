import React, { useEffect, useState } from "react";
import Balance from "../components/Balance";
import UsersSection from "../components/UsersSection";
import Navbar from "../components/Navbar";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  return (
    <main>
      <Navbar />
      <Balance />
      <UsersSection users={users} setFilter={setFilter} />
    </main>
  );
}

export default Dashboard;
