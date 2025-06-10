import React from 'react';
import Banner from '../Component/Banner';
import TopFoods from './TopFoods';

const Home = () => {
    const resturentPromise = fetch('http://localhost:3000/resturent')
    .then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <TopFoods resturentPromise={resturentPromise}></TopFoods>
        </div>
    );
};

export default Home;