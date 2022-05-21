
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebaseConfig';
import Loading from '../loading/Loading';

const ManageDoctors = () => {
    const [user, loading] = useAuthState(auth)

    const { isLoading, error, data: doctors, refetch } = useQuery(['doctors', user], () =>
    fetch('http://localhost:5000/doctors').then(res =>
      res.json()
        ))
    if (isLoading || loading) {
        return <Loading data='Lodding...'></Loading>
    }
    console.log(doctors);
    return (
        <div>
            <h1>Manage Doctors</h1>
        </div>
    );
};

export default ManageDoctors;