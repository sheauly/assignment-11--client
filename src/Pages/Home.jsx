import React, { Suspense } from 'react';
import Banner from '../Component/Banner';
import TopFoods from './TopFoods';
import Testimonials from './Testimonials';
import PopularCategories from './PopularCategories';


const Home = () => {
    
    return (
        <div>

            <Banner></Banner>
            <section>
                <TopFoods></TopFoods>
               
            </section>
            <section className='mt-8'>
            <Testimonials></Testimonials>
            </section>
            <section className='mt-8'>
                <PopularCategories></PopularCategories>
            </section>
        </div>
    );
};

export default Home;