import { Link } from 'react-router-dom';
import logo from '../../../../public/Summer_Fun-removebg-preview.png';

const Navbar = () => {
    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link>Instructors</Link></li>
            <li><Link>Classes</Link></li>
            <li><Link>Dashboard </Link></li>
            <li><Link>User profile picture</Link></li>
           
        </>

    return (
        <div className="navbar fixed z-10 bg-opacity-60 bg-gray-800  text-white max-w-screen-xl mx-auto font-serif italic">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
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