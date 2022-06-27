import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.value.email;
        const password = event.target.value.password;
        signInWithEmailAndPassword(email,password)
    }

    return (
        <div className='text-center mt-auto'>
            <h1 className='text-2xl mb-4'>Login here</h1>
            <form onSubmit={handleSignIn}>
                <input type="email" name='email' placeholder="your email" className="mt-4 input input-bordered input-info w-full max-w-xs" /><br />
                <input type="password" name='password' placeholder="your password" className="mt-4 input input-bordered input-info w-full max-w-xs" /><br />
                <input type="submit" className="btn btn-primary mt-4 w-full max-w-xs" />
            </form>
            <p>Are you new? <span onClick={() => navigate('/registration')} className='text-sm text-primary'>create an account</span></p>
             <div className='h-px bg-primary w-1/4 mx-auto my-6'></div>
            <SocialLogin/>
        </div>
    );
};

export default Login;