import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddFood = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const newFood = {
            name: form.name.value,
            category: form.category.value,
            quantity: parseInt(form.quantity.value),
            price: parseFloat(form.price.value),
            description: form.description.value,
            buyerName: form.buyerName.value,
            buyerEmail: form.buyerEmail.value,
            buyingDate: startDate.toLocaleDateString("en-GB"),
            foodImage: form.foodImage.value,
            foodOrigin: form.foodOrigin.value,
            addedBy: user?.displayName,
            addedByEmail: user?.email
        };

        axios.post('http://localhost:3000/resturent', newFood)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post added successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Post could not be added!',
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: error.response?.data?.message || 'Something went wrong!',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Add New Food Item</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 grid gap-3">
                    <legend className="text-lg font-semibold mb-2">Basic Info</legend>

                    <label className="label">Food Name</label>
                    <input type="text" name='name' className="input w-full" placeholder="Food Name" required />

                    <label className="label">Price</label>
                    <input type="number" name='price' className="input w-full" placeholder="Price" required />

                    <label className="label">Food Category</label>
                    <input type="text" name='category' className="input w-full" placeholder="e.g. Snacks" required />

                    <label className="label">Quantity</label>
                    <input type="number" name='quantity' className="input w-full" placeholder="Quantity" required />

                    <label className="label">Food Image URL</label>
                    <input type="text" name='foodImage' className="input w-full" placeholder="Image URL" required />

                    <label className="label">Buyer Name</label>
                    <input type="text" name='buyerName' className="input w-full" value={user?.displayName || ''} readOnly />

                    <label className="label">Buyer Email</label>
                    <input type="email" name='buyerEmail' className="input w-full" value={user?.email || ''} readOnly />

                    <label className="label">Buying Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="input input-bordered w-full"
                        name="buyingDate"
                    />

                    <label className="label">Food Origin</label>
                    <input type="text" name='foodOrigin' className="input w-full" placeholder="e.g. Italy" />

                    <label className="label">Description</label>
                    <input type="text" name='description' className="input w-full" placeholder="Short description" />

                    <label className="label">Extra Info</label>
                    <select defaultValue="short" className="select w-full">
                        <option disabled={true}>Short description</option>
                        <option>Ingredients</option>
                        <option>Making procedure</option>
                    </select>
                </fieldset>

                <input type="submit" className='btn mt-4' value="Add Item" />
            </form>
        </div>
    );
};

export default AddFood;
