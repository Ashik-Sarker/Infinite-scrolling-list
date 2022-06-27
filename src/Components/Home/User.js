import React from 'react';

const User = ({ u }) => {
    // console.log(u);
    return (
        <div className='bg-gray-100 flex justify-between items-center p-6'>
            <div>
                <img src={u.picture.large} alt="" srcset="" />
            </div>
            <div className='text-center'>
                <h1>{u.name.title}. {u.name.first} {u.name.last}</h1>
                <p>Gender: {u.gender}</p>
                <small className='text-xs'>{u.email}</small><br />
                <button className='btn btn-xs btn-primary'>Details</button>
            </div>
        </div>
    );
};

export default User;