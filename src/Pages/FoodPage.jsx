import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodPage = () => {
    const resturent = useLoaderData();

    const { name, image, price, purchaseCount, description } = resturent;

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow">
            <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <p className="text-lg text-gray-700 mb-2">Price: ${price}</p>
            <p className="text-gray-600 mb-2">Purchased: {purchaseCount} times</p>
            <p className="text-gray-800">{description || "No description available."}</p>
        </div>
    );
};

export default FoodPage;
