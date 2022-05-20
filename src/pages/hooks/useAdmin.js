import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const useAdmin = () => {
    const [user] = useAuthState(auth)
    const [admin, setAdmin] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/admin/${user?.email}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAdmin(data.isAdmin)

        })
    }, [user?.email])
    
    return [admin]
};

export default useAdmin;