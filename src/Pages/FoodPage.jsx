import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const FoodPage = () => {
    const resturent = useLoaderData();

    

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow">
            <img
                src={resturent.foodImage}
                alt={resturent.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-3xl font-bold mb-2">{resturent.name}</h1>
            <p className="text-lg text-gray-700 mb-1">Category: {resturent.category}</p>
            <p className="text-lg text-gray-700 mb-1">Price: {resturent.price}</p>
            <p className="text-lg text-gray-700 mb-1">Rating: ⭐ {resturent.rating}</p>
            <p className="text-lg text-gray-700 mb-1">
                Available: {resturent.available ? 'Yes' : 'No'}
            </p>
            <p className="text-gray-600 mb-2">
                Purchased: {resturent.purchaseCount ?? 0} times
            </p>
            <p className="text-gray-800 mb-6">
                {resturent.description || 'No description available.'}
            </p>

            <Link to={`/foodPurchase/${resturent._id}`}>
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                    Purchase Now
                </button>
            </Link>
        </div>
    );
};

export default FoodPage;
