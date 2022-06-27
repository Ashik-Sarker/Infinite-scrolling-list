import React from 'react';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    
    if(user){
        navigate('/');
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='text-center mt-12'>
            <h1 className='text-2xl mb-4 text-primary font-semibold'>Registration Here</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='myName' placeholder="Your name" className="input input-bordered input-info w-full max-w-xs mt-4"/><br />
                <input type="email" name='email' placeholder="your email" className="mt-4 input input-bordered input-info w-full max-w-xs" required /><br />
                <input type="password" name='password' placeholder="your password" className="mt-4 input input-bordered input-info w-full max-w-xs" required /><br />
                {
                    loading && <p className='text-primary'>Loading...</p>
                }
                <p className='text-secondary'>{error?.message}</p>
                <input type="submit" className="btn btn-primary mt-4 w-full max-w-xs" />
            </form>

            <p className='mt-2'>Already have an account? <span onClick={() => navigate('/login')} className='text-sm text-primary'>Login Please</span></p>
            
            <div class="flex flex-col w-full max-w-xs mx-auto border-opacity-50"> 
                <div class="divider">OR</div>
            </div>

            <SocialLogin />
            
        </div>
    );
};

export default Registration;