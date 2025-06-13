import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const FoodPurchase = () => {
    const purchesFood = useLoaderData();
    const { user } = use(AuthContext);
    console.log(purchesFood)

    const handleSubmit = e => {
        e.preventDefault();
      
    }
    return (
        <div>
          
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4 bg-white p-6 rounded-lg shadow">
               
                <h2 className="text-2xl font-bold text-center mb-10">Volunteer Request</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input readOnly value={purchesFood.name} className="input input-bordered" />
                    <input readOnly value={purchesFood.category} className="input input-bordered" />
                    <input readOnly value={purchesFood.quantity} className="input input-bordered" />
                    <input readOnly value={purchesFood.price} className="input input-bordered" />
                    <input readOnly value={purchesFood.description} className="input input-bordered" />
                    <input readOnly value={purchesFood.organizerEmail} className="input input-bordered" />
                    <input readOnly value={user?.displayName} className="input input-bordered" />
                    <input readOnly value={user?.email} className="input input-bordered" />
                </div>

                <textarea
                    name="suggestion"
                    placeholder="Any suggestion..."
                    className="textarea textarea-bordered w-full"
                    required
                ></textarea>

                <button type="submit" className="btn btn-primary w-full">Request</button>
            </form>
        </div>
    );
};

export default FoodPurchase;