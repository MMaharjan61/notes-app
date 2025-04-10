import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Notes app</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Diary</NavLink>
            </li>
            <li>
              <NavLink to="/school-notes">School Notes</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
