import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-50 flex justify-center py-6">
      <ul className="flex items-center justify-center gap-4 text-lg">
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/users">Users</NavLink> </li>
        <li> <NavLink to="/update">Update</NavLink> </li>
      </ul>
    </div>
  );
};

export default Navbar;