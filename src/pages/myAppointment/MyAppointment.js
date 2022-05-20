import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';

const MyAppointment = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth)

    // Load current user booked appointments
    const { data: appointments, isLoading } = useQuery(['bookingData', user], () => 
        fetch(`http://localhost:5000/booking?email=${user?.email}`, {
            method: 'GET',
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    navigate('/')
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    return
                }
                return res.json()
            })
    )
    if (loading || isLoading) {
        return <Loading data='Logining...'></Loading>
    }
    return (
        <div className='w-full'>
            <h1>My Appointments : {appointments?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full m-0">
                    <thead>
                        <tr>
                            <th>INDEX</th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>TIME</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments?.map((appoint, index) =>
                            <tr key={appoint._id}>
                                <th>{index}</th>
                                <td>{appoint.firstName}</td>
                                <td>{appoint.treatmentName}</td>
                                <td>{appoint.time}</td>
                                <td>{appoint.date}</td>
                            </tr>
                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;