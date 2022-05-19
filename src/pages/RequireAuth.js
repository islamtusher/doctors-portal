import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebaseConfig';
import Loading from './loading/Loading';
import LoginModal from './loginModal/LoginModal';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    // let location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        // return <Navigate to="/login" state={{ from: location }} replace />;
        return  document.getElementById('login-modal').checked= true
        ;
    }
    // if (!user.emailVerified) {
    //     return <Loading data='Wating For Email Varivied'></Loading>
    // }
                                          
    return children;
};

export default RequireAuth;