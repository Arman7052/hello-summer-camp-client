import { Link } from 'react-router-dom';
import logo from '../../../../public/Summer_Fun-removebg-preview.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const [showUsername, setShowUsername] = useState(false);

    const handleMouseEnter = () => {
        setShowUsername(true);
    };

    const handleMouseLeave = () => {
        setShowUsername(false);
    };
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const { user, logOut } = useContext(AuthContext);
    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/instructors'>Instructors</Link></li>
            <li><Link to='/classes'>Classes</Link></li>
            <li>
                {user && (
                        <Link to="/dashboard">Dashboard </Link>
                    )
                }
            </li>
            <li>
                {user && (
                    <Link
                        to="/"
                        className="relative inline-block"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="h-6 w-6 rounded-full"
                        />
                        {showUsername && (
                            <span className="absolute bg-transparent text-orange-500 text-justify text-xs whitespace-nowrap p-3 ">
                                {user.displayName}
                            </span>
                        )}
                    </Link>
                )}
            </li>
            <li>
            {user ?
                        <Link onClick={handleLogout} to='/' className="">Log Out</Link> :
                        <Link to='/login' className="">Login</Link>

                    }
            </li>

        </>

    return (
        <div className="navbar fixed z-10 bg-opacity-60 bg-gray-800  text-orange-500 lg:max-w-screen-xl mx-auto font-serif italic">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow-lg bg-neutral-content  rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link><img className=' h-32 w-40' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;