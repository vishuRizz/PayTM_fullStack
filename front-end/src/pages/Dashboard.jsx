import React from "react";
import Balance from "../components/Balance";
import UsersSection from "../components/UsersSection";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <main>
     <Navbar/>
     <Balance/>
     <UsersSection/>
    </main>
  );
}

export default Dashboard;
