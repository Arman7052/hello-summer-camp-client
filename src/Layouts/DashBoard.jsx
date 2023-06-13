import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer";
import Navbar from "../Pages/Home/Shared/Navbar";
import {  FaUser, FaUserClock, FaUserEdit } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdOutlineClass } from "react-icons/md";

const DashBoard = () => {

  const isAdmin = true;
  const isInstrutor = true;
  
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

            {
              isAdmin? <>
              <li className="hover:text-indigo-500 ">
              <NavLink className='bg-transparent' to='/dashboard/allUser'> <FaUser></FaUser> Manage User </NavLink>
            </li>
              <li className="hover:text-indigo-500 ">
              <NavLink className='bg-transparent' to='/dashboard/manageClasses'> <MdOutlineClass></MdOutlineClass> Manage Classes </NavLink>
            </li>
              </>: isInstrutor? <>
              <li className="hover:text-indigo-500 ">
              <NavLink className='bg-transparent' to='/dashboard/selectedClasses'> <FaUserClock></FaUserClock> Selected Classes </NavLink>
            </li>
            <li className="hover:text-indigo-500 ">
              <NavLink className='bg-transparent' to='/dashboard/enrolledClasses'> <FaUserEdit></FaUserEdit> Enrolled Classes </NavLink>
            </li>
            <li className="hover:text-indigo-500 ">
              <NavLink className='bg-transparent' to='/dashboard/paymentHistory'> <GiWallet></GiWallet> Payment History </NavLink>
            </li>
              </>:<></>
            }

           



          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
