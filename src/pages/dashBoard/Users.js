import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebaseConfig';

const Users = () => {
    const [user, loading] = useAuthState(auth)

    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/users').then(res =>
      res.json()
        ))
    
    // handle User Deleting
    const handleUserDelete = (userDelete) => {
        fetch(`http://localhost:5000/user/${userDelete?.email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
        })
    }
    // handle user add to admin 
    const handleAdmin = (adminUser) => {
        console.log(adminUser?.email);
        fetch(`http://localhost:5000/user/admin/${adminUser?.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res?.status === 403) {
                    toast('You Dont Have Permission To This Oparation')
                    return
                };
                return res.json()
            })
            .then(data => {
                if (data?.modifiedCount > 0) {
                    refetch()
                    toast('Admin Conform')
                    console.log(data);
                }
                
            })
            .catch(error => {
                console.log(error);
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
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{!user?.role ?
                                    <button onClick={()=>handleAdmin(user)} className="btn btn-ghost">Admin</button>
                                    :
                                    <button className="btn btn-ghost btn-disabled">Already Admin</button>

                                }
                                </td>
                                <td>
                                    <button
                                        onClick={()=>handleUserDelete(user)}
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