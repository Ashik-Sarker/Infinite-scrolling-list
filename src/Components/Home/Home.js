import React, { useEffect, useState } from 'react';
import Registration from '../Authentication/Registration';
import Navbar from '../Navbar/Navbar';
import User from './User';

const Home = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    console.log(user.results);
    return (
        <div className='w-5/6 mx-auto mt-12'>
            <div className="grid grid-cols-3 gap-4">
                {
                    user?.results?.map(u => <User
                    key={u.id.value}
                    u = {u}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Home;