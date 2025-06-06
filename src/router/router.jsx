import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayOut from '../layOut/RootLayOut';
import Home from '../Pages/Home';
import AddFood from '../Pages/AddFood';
import Gallery from '../Pages/Gallery';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayOut></RootLayOut>,
        children: [
            {
                index: true, 
                element: <Home></Home>
            },
            {
                path: 'addFoods',
                element: <AddFood></AddFood>
            },
            {
                path: 'gallery',
                element: <Gallery></Gallery>
            }
        ]
    },
]);
  

export default router;