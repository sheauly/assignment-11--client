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
                loader: ({params}) => fetch(`http://localhost:3000/resturent/${params.id}`)
            },
            {
                path: '/foodPurchase/:id',
                element: <PrivateRoute>
                    <FoodPurchase></FoodPurchase>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/resturent/${params.id}`)
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
                loader: ({ params }) => fetch(`http://localhost:3000/resturent/${params.id}`),
            }
            
           ]
    },
]);
  

export default router;