import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox"className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                {/* <!-- Page content here --> */}
                <h1 className='text-4xl text-primary'>Dash Board</h1>
                <Outlet />
                <label htmlFor="my-drawer-2"className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2"className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appoinment</Link></li>
                    <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>
                    <li><Link to='/dashboard/users'>Users</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;