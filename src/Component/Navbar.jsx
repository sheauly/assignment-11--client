import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import logoImage from '../assets/navLogo.png';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch((error) => toast.error(error.message));
    };

    const Links = (
        <>
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
                <NavLink to="/gallery" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>Gallery</NavLink>
            </li>
            <li>
                <NavLink to="/addFood" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>AddFood</NavLink>
            </li>
            <li>
                <NavLink to="/myFood" className={({ isActive }) =>
                    isActive ? "text-secondary font-semibold" : "text-green-700 hover:text-green-700"
                }>MyFood</NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-screen-xl mx-auto px-4">
                {/* Left (Logo + Mobile Dropdown) */}
                <div className="flex-1">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-2">
                        <img className="h-10 w-10 rounded-2xl" src={logoImage} alt="logo" />
                        <span className="text-xl font-bold text-green-700">Management Restaurant</span>
                    </Link>
                </div>

                {/* Center (Links for large screen) */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>

                {/* Right (Theme + Auth) */}
                <div className="flex items-center gap-4">
                    <input onChange={handleToggle} type="checkbox" defaultChecked={theme === "dark"} className="toggle toggle-warning" />

                    {user ? (
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full ring-2 ring-green-600" />
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline btn-sm text-green-700 hover:btn-success">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline btn-sm text-green-700">Login</Link>
                            <Link to="/register" className="btn btn-outline btn-sm text-green-700">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
