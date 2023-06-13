import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer";
import Navbar from "../Pages/Home/Shared/Navbar";
import {  FaUserClock, FaUserEdit } from "react-icons/fa";

const DashBoard = () => {
  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open pt-36">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-cyan-200 text-orange-600">
            {/* Sidebar content here */}
            <li className="hover:text-indigo-500 ">
              <NavLink className='bg-transparent' to='/dashboard/selectedClasses'> <FaUserClock></FaUserClock> Selected Classes </NavLink>
            </li>
            <li className="hover:text-indigo-500 ">
              <NavLink className='bg-transparent' to='/dashboard/enrolledClasses'> <FaUserEdit></FaUserEdit> Enrolled Classes </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
