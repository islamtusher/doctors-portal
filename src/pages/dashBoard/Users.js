import React from 'react';
import { useQuery } from 'react-query';

const Users = () => {

    const { isLoading, error, data: users } = useQuery('users', () =>
    fetch('http://localhost:5000/users').then(res =>
      res.json()
    ))

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
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;