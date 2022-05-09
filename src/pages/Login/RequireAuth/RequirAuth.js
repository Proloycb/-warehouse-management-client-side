import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const RequirAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Your Email is not verified!!</h3>
            <h5 className='text-success'>Please verify your email address</h5>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send verification email again
            </button>
        </div>
    }
    return children;
};

export default RequirAuth;