import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const RootLayOut = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto rounded-2xl'>
            <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayOut;