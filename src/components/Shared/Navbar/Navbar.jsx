/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const addClass = isActive => 
        isActive ? 'font-semibold border-2 border-customGreen text-customGreen hover:bg-customGreen hover:text-white' : '';
    const navLinks = <>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/listed-books">Listed Books</NavLink></li>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/pages-to-read">Pages to Read</NavLink></li>
        <li><NavLink className={({ isActive }) => addClass(isActive)} to="/all-books">All Books</NavLink></li>
    </>

    return (
        <nav className='container max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm bg-base-100 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink to="/" className="text-2xl font-bold">Book Vibe</NavLink>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 space-x-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className="btn bg-customGreen hover:bg-green-600 text-white font-semibold">Sign In</button>
                    <button className="btn bg-customBlue hover:bg-blue-400 text-white font-semibold">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;