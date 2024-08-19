import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

function UsersSection() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
        console.log(users);
      });
  }, [filter]);
  return (
    <>
      <div className="p-4">
        <h3>Users</h3>
        <div class="input-group mb-3">
          <input
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            type="text"
            className=" form-control"
            placeholder="Search users"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className="h-screen px-4 pt-2 border-1">
        {users.map((e) => {
          return <User key={e.id} name={e.firstName} />;
        })}
      </div>
    </>
  );
}

export default UsersSection;
