import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {
    useLocation,
    Navigate,
} from "react-router-dom";

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if(loading){
        return <p className='text-4xl text-primary text-center'>Loading...</p>
    }
    if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;