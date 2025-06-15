import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3000/posts?search=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
            })
            .catch((err) => console.error("Fetch error:", err))
            .finally(() => setLoading(false));
    }, [searchTerm]);

    return (
        <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-center mb-4">
                All Foods ({foods.length})
            </h2>

            <div className="mb-6 max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Search by food title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full input input-bordered"
                />
            </div>

            {loading ? (
                <p className="text-center">Loading...</p>
            ) : foods.length === 0 ? (
                <p className="text-center text-gray-500">No foods found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foods.map((item) => (
                        <div key={item._id} className="p-4 bg-base-100 rounded-xl shadow">
                            <img className="rounded-xl w-full h-48 object-cover" src={item.foodImage} alt={item.name} />
                            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Category: {item.category}</p>
                            <Link
                                to={`/foodPage/${item._id}`}
                                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllFoods;
