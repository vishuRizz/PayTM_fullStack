
import User from "./User";

function UsersSection({ users, setFilter }) {
  return (
    <>
      <div className="p-4">
        <h3>Users</h3>
        <div className="mb-3 input-group">
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
          return <User key={e._id} name={e.firstName} id={e._id} />;
        })}
      </div>
    </>
  );
}

export default UsersSection;
