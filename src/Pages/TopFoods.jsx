import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/resturent")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched Data:", data);

                const allFoods = Array.isArray(data) ? data : data.foods || [];
                

                const sortedFoods = allFoods
                    .sort((a, b) => b.purchaseCount - a.purchaseCount)
                    .slice(0, 6);

                setFoods(sortedFoods);

              
            })
            .catch((err) => console.error("Fetch error:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-4">
                Total Foods: {foods.length}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {foods.map((item) => (
                    <div key={item._id} className="p-4 bg-base-100 rounded-xl shadow flex flex-col justify-between">
                        <div className="flex-1">
                            <img className="rounded-xl" src={item.image} alt={item.name} />
                            <h3 className="text-xl font-semibold mt-5">{item.name}</h3>
                            <p>Purchased: {item.purchaseCount}</p>
                        </div>
                        <div className="text-end">
                            <Link to={`/foodPage/${item._id}`} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-6">
                <Link to="/allFoods" className="bg-green-600 text-white px-6 py-2 rounded">
                    See All
                </Link>
            </div>
        </div>
    );
};

export default TopFoods;
