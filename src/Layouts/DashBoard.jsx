import Footer from "../Pages/Home/Shared/Footer";
import Navbar from "../Pages/Home/Shared/Navbar";

const DashBoard = ({ role }) => {
  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open pt-36">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className=""><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
      {role === 'Admin' && (
        <div>
          {/* Admin dashboard content */}
        </div>
      )}
      {role === 'Instructor' && (
        <div>
          {/* Instructor dashboard content */}
        </div>
      )}
      {role === 'Student' && (
        <div>
          {/* Student dashboard content */}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default DashBoard;



// import Footer from "../Pages/Home/Shared/Footer";
// import Navbar from "../Pages/Home/Shared/Navbar";


// const DashBoard = () => {
//     return (
//         <div className=" lg:max-w-screen-xl mx-auto ">
//             <Navbar></Navbar>
//             <div className="drawer lg:drawer-open pt-36">
//                 <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content flex flex-col items-center justify-center">
//                     {/* Page content here */}
//                     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//                 </div>
//                 <div className="drawer-side">
//                     <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//                         {/* Sidebar content here */}
//                         <li className=""><a>Sidebar Item 1</a></li>
//                         <li><a>Sidebar Item 2</a></li>
//                     </ul>

//                 </div>
//             </div>
//             <Footer></Footer>
//         </div>
        
//     );
// };

// export default DashBoard;