import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const RootLayOut = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto rounded-2xl'>
            <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default RootLayOut;