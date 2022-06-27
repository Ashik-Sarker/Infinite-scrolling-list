import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import {useNavigate,useLocation} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
        navigate(from, { replace: true });
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='text-center mt-12'>
            <h1 className='text-2xl mb-4 text-primary font-semibold'>Login here</h1>
            <form onSubmit={handleSignIn}>
                <input type="email" name='email' placeholder="your email" className="mt-4 input input-bordered input-info w-full max-w-xs" required /><br />
                <input type="password" name='password' placeholder="your password" className="mt-4 input input-bordered input-info w-full max-w-xs" required /><br />
                {
                    loading && <p className='text-primary'>Loading...</p>
                }
                <p className='text-secondary'>{error?.message}</p>
                <input type="submit" className="btn btn-primary mt-4 w-full max-w-xs" />
            </form>

            <p className='mt-2'>Are you new? <span onClick={() => navigate('/registration')} className='text-sm text-primary'>create an account</span></p>

            <div class="flex flex-col w-full max-w-xs mx-auto border-opacity-50"> 
                <div class="divider">OR</div>
            </div>

            <SocialLogin/>
        </div>
    );
};

export default Login;