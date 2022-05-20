import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebaseConfig';

const Users = () => {
    const [user, loading] = useAuthState(auth)

    const { isLoading, error, data: users } = useQuery('users', () =>
    fetch('http://localhost:5000/users').then(res =>
      res.json()
        ))
    
    // handle admon
    const handleAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user?.email}`, {
            method: 'PUT',
            headers: {
                'authorozation': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
        })
    }
    return (
        <div className='w-full'>
            <h1>Doctors Portal Users : {Users?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full m-0">
                    <thead>
                        <tr>
                            <th>INDEX</th>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index}</th>
                                <td>{user.email}</td>
                                <td><button onClick={handleAdmin} className="btn btn-ghost">Admin</button></td>
                                <td>
                                    <button
                                        className="btn btn-square btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5" fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round"
                                                troke-linejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;