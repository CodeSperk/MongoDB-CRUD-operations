import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    // console.log(id);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successful!");
          const newUsers = loadedUsers.filter((user) => user._id !== id);
          setUsers(newUsers);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold">
        Total Number of Users : {users.length}{" "}
      </h1>

      <table className="text-center border-collapse max-w-96 mx-auto mt-10">
        <thead>
          <tr className="uppercase bg-blue-100">
            <th className="p-4 text-start">User ID</th>
            <th className="p-4 text-start">Name</th>
            <th className="p-4 text-start">email</th>
            <th className="p-4 text-start">Update</th>
            <th className="p-4 text-start">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="bg-blue-50 border-b-2">
              <td className="p-4">{user._id}</td>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td>
                <Link to={`/update/${user._id}`}>
                  <button className="text-sm bg-blue-400 text-white px-2 py-1 rounded hover:scale-90 duration-700">Update</button>
                </Link>
              </td>
              <td className="p-4">
                <button
                  className="bg-blue-400 px-3 rounded text-white hover:scale-75 duration-500"
                  onClick={() => handleDelete(user._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
