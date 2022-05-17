import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebaseConfig';
import CustomLink from '../../customLInk/CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)
    const currentUser = user?.email?.split('@')[0]
    const navMenu = <>
        <li><CustomLink to="/">Home</CustomLink></li>
        <li><CustomLink to="/about">About</CustomLink></li>
        <li><CustomLink to="/appointment">Appoinment</CustomLink></li>
        <li><CustomLink to="/meeting">Meeting</CustomLink></li>
        <li><CustomLink to="/reviews">Reviews</CustomLink></li>
        <li><CustomLink to="/contact">Contact</CustomLink></li>
        {
            user?.email ? 
                <>
                    <button className='btn btn-primary' onClick={() => signOut(auth)}>LogOut</button>
                    <li>{currentUser}</li>
                </>
                :
                <>
                    <li><CustomLink to="/login">Login</CustomLink></li>
                    <li><CustomLink to="/signup">SingUP</CustomLink></li>
                </>
        }

    </>
    return (
        <div className="">
             <div className="navbar xl:w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl">Doctors Portal</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navMenu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;