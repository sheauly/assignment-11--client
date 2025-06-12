import React, { Suspense } from 'react';
import Banner from '../Component/Banner';
import TopFoods from './TopFoods';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <section>
                <TopFoods></TopFoods>
            </section>
        </div>
    );
};

export default Home;