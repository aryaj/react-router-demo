import { Link, Outlet } from "react-router-dom";

export const Users = () => {
  return (
    <div>
      <nav>
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>
      </nav>
      <Outlet />
    </div>
  );
};
