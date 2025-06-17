import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayOut from '../layOut/RootLayOut';
import Home from '../Pages/Home';
import Gallery from '../Pages/Gallery';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import FoodPage from '../Pages/FoodPage';
import AllFoods from '../Pages/AllFoods';
import AddFood from '../Pages/AddFood';
import FoodPurchase from '../Pages/FoodPurchase';
import PrivateRoute from '../context/PrivateRoute';
import MyFood from '../Pages/MyFood';
import MyFoodUpdated from '../Pages/MyFoodUpdated';
import Error404 from '../Pages/Error404';

// import Testimonials from '../Pages/Testimonials';



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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: 'gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/allFoods',
                element: <AllFoods></AllFoods>
            },
            {
                path: '/addFood',
                element: <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            },
            {
                path: '/foodPage/:id',
                element: <FoodPage></FoodPage>,
                loader: ({ params }) => fetch(`https://assignment-11-server-resturent.vercel.app/resturent/${params.id}`)
            },
            {
                path: '/foodPurchase/:id',
                element: <PrivateRoute>
                    <FoodPurchase></FoodPurchase>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-resturent.vercel.app/resturent/${params.id}`, { credentials: 'include' })
            },
            {
                path: '/myFood',

                element: <PrivateRoute>
                    <MyFood></MyFood>
                </PrivateRoute>

            },
            {
                path: '/myFoodUpdated/:id',
                element: <PrivateRoute>
                    <MyFoodUpdated></MyFoodUpdated>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-resturent.vercel.app/resturent/${params.id}`),
            },
            // {
            //     path: '/testimonials',
            //     element: <Testimonials></Testimonials> 
            // }

        ]
    },
    {
        path: '/*',
        element: <Error404></Error404>
    }
]);


export default router;