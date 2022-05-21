
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';

const ManageDoctors = () => {
    const [user, loading] = useAuthState(auth)

    const { isLoading, error, data: doctors, refetch } = useQuery(['doctors', user], () =>
        fetch('http://localhost:5000/doctors', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>res.json()
        ))
    if (isLoading || loading) {
        return <Loading data='Lodding...'></Loading>
    }

    // Handle doctor delete
    const handleDoctorDelete = (doctor) => {
        const conformation = window.confirm('Are You Sure To Delete')
        if (!conformation) {
            return
        }
        fetch(`http://localhost:5000/doctor/${doctor?.email}`, {
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
    return (
        <div className='w-full'>
            <h1>Mange Our Doctors</h1>
            <div className="overflow-x-auto">
                <table className="table w-full m-0">
                    <thead>
                        <tr>
                            <th>INDEX</th>
                            <th>Avater</th>
                            <th>NAME</th>
                            <th>email</th>
                            <th>Manage Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors?.map((doctor, index) =>
                            <tr key={doctor._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={doctor.image} alt="doctor-img"/>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>
                                    <button
                                        onClick={()=>handleDoctorDelete(doctor)}
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

export default ManageDoctors;