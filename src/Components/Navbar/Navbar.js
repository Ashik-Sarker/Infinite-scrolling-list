import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    // const isTrue = false;
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/' className="btn btn-sm normal-case text-xl">Home</a>
            </div>


            {/* kaj shudhu aikhan theke suru */}
            <div className="flex-none mx-12">
                {
                    user
                    ?
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={()=> signOut(auth)} className='btn btn-outline'>Logout</button></li>
                        </ul>
                    </div>
                    :
                    <>
                    <button className='btn btn-outline btn-sm mr-4'><Link to="/login">Login</Link></button>
                    <button className='btn btn-outline btn-sm'><Link to="/registration">Registration</Link></button>
                    </>
                }
                
            </div>
        </div>
    );
};

export default Navbar;