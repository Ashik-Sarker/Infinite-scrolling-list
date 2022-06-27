import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Registration from '../Authentication/Registration';
import Navbar from '../Navbar/Navbar';
import User from './User';

const Home = () => {
    const [page, setPage] = useState(1);
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://randomuser.me/api/?page=${page}&results=30&seed=abc`)
        .then(res => res.json())
        .then(data => {
            setUser([...user, ...data.results])
            setIsLoading(false);
        })
    }, [page])

    const pageAdded = () => {
        setTimeout(() => {
            setPage(page + 1);
        }, 1000);
    }
    
    console.log(user);

    return (
        <div className='w-5/6 mx-auto mt-12'>
            <div className="">
                <InfiniteScroll
                    dataLength={user.length}
                    next={pageAdded}
                    hasMore={true}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                {
                    user?.map(u => <User
                    key={u.id.value}
                    u = {u}
                    ></User>)
                }
                </InfiniteScroll>
            </div>
            {
                isLoading && <p className='text-center text-2xl mb-24 mt-6'>Loading...</p>
            }
        </div>
    );
};

export default Home;