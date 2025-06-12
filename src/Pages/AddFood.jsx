
import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddFood = () => {
    const { user } = use(AuthContext);

    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const newFood = {
            name: form.name.value,
            image: form.image.value,
            category: form.category.value,
            quantity: parseInt(form.quantity.value),
            price: parseFloat(form.price.value),
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
    }

    return (
        <div>
            <h2>Please all food</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Food Name</label>
                    <input type="text" name='name' className="input" placeholder="name" />

                    <label className="label">Food Image</label>
                    <input type="text" name='image' className="input" placeholder="image" />

                    <label className="label">Food Category</label>
                    <input type="text" name='category' className="input" placeholder="category" />

                    <label className="label">quantity</label>
                    <input type="text" name='quantity' className="input" placeholder="quantity" />

                    <label className="label">Price </label>
                    <input type="text" name='price' className="input" placeholder="price" />

                    <label className="label">Add By</label>
                    <input type="text" name='add by' className="input" placeholder="add by" />
                </fieldset>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddFood;