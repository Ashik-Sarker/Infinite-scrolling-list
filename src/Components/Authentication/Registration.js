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
        <div className='text-center mt-auto'>
            <h1 className='text-2xl mb-4'>Registration here</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='myName' placeholder="Your name" className="input input-bordered input-info w-full max-w-xs" /><br />
                <input type="email" name='email' placeholder="your email" className="mt-4 input input-bordered input-info w-full max-w-xs" /><br />
                <input type="password" name='password' placeholder="your password" className="mt-4 input input-bordered input-info w-full max-w-xs" /><br />
                {
                    loading && <p className='text-secondary'>Loading...</p>
                }
                <p className='text-secondary'>{error?.message}</p>
                <input type="submit" className="btn btn-primary mt-4 w-full max-w-xs" />
            </form>
            <p>Already have an account? <span onClick={()=> navigate('/login')} className='text-sm text-primary'>Login Please</span></p>
            <div className='h-px bg-primary w-1/4 mx-auto my-6'></div>
            <SocialLogin />
            
        </div>
    );
};

export default Registration;