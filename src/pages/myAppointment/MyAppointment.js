import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth)
    // const [bookingData, setBookingData] = useState([])

    const { data: appointments, isLoading } = useQuery(['bookingData', user], () => 
        fetch(`http://localhost:5000/booking?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
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
                        {appointments.map((appoint, index) =>
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