import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const FoodPage = () => {
    const resturent = useLoaderData();

    return (
        <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded-lg shadow">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src={resturent.foodImage}
                        alt={resturent.name}
                        className="w-full h-80 object-cover rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 space-y-3">
                    <h1 className="text-3xl font-bold">{resturent.name}</h1>
                    <p className="text-lg text-gray-700">Category: {resturent.category}</p>
                    <p className="text-lg text-gray-700">Price: ${resturent.price}</p>
                    <p className="text-lg text-gray-700">Rating: ⭐ {resturent.rating}</p>
                    <p className="text-lg text-gray-700">
                        Available: {resturent.available ? 'Yes' : 'No'}
                    </p>
                    <p className="text-gray-600">Purchased: {resturent.purchaseCount || 0} times</p>
                    <p className="text-gray-800">
                        {resturent.description || 'No description available.'}
                    </p>
                </div>
            </div>

            {/* Button Section */}
            {
                resturent.purchaseCount === 0 ? (
                    <p className='mt-6 text-red-600 font-semibold'>item is not available</p>

                ) : (
                    <div className="text-center mt-8">
                        <Link to={`/foodPurchase/${resturent._id}`}>
                            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                                Purchase Now
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default FoodPage;
