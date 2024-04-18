import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <div >
      <h1 className="text-center mt-10 text-3xl font-bold">Total Number of Users : {users.length} </h1>

      <table className="text-center border-collapse max-w-96 mx-auto mt-10">
        <thead>
          <tr className="uppercase bg-blue-100">
            <th className="p-4 text-start">User ID</th>
            <th className="p-4 text-start">Name</th>
            <th className="p-4 text-start">email</th>
            <th className="p-4 text-start">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <tr key={user._id} className="bg-blue-50 border-b-2">
            <td className="p-4">{user._id}</td>
            <td className="p-4">{user.name}</td>
            <td className="p-4">{user.email}</td>
            <td className="p-4"><button className="bg-blue-400 px-3 rounded text-white hover:scale-75 duration-500">X</button></td>
          </tr>)}
        </tbody>
      </table>


    </div>
  );
};

export default Users;