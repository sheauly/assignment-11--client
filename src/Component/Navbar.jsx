import React, { use } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    
    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch((error) => toast.error(error.message));
    };
    const Links = <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>Home</NavLink>
            </li>
            <li>
            <NavLink to="/allFoods" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>AllFoods</NavLink>
            </li>
            <li>
                <NavLink to="gallery" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>Gellery</NavLink>
            </li>
            <li>
                <NavLink to="/addFood" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>AddFood</NavLink>
        </li>
        
        </>
return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
            <div className='flex gap-2'>
                <img className='h-10 w-10 rounded-2xl' src="/public/logo.png" alt="" />
                <h2 className='text-2xl font-bold'>Manegement Resturent</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
        <div className="navbar-end gap-4">
            <input type="checkbox" defaultChecked className="toggle toggle-warning" />
            {user ? (
                <>
                    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                        <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full ring-2 ring-green-600" />
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline text-green-700 hover:btn-success">
                        Logout
                    </button>
                </>
            ) : (
                    <>
                        
                    <Link to="/login" className="btn btn-outline text-green-700">Login</Link>
                    <Link to="/register" className="btn btn-outline text-green-700">Register</Link>
                </>
            )}
            </div>
      </div>
    );
};

export default Navbar;