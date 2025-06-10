import { useEffect, useState } from "react";

const TopFoods = () => {
    const [resturents, setResturents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResturents = async () => {
            try {
                const res = await fetch("http://localhost:3000/resturent");
                const data = await res.json();
                setResturents(data);
            } catch (error) {
                console.error("Error fetching resturents:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResturents();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-4">
                Total Foods: {resturents.length}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {resturents.slice(0, 6).map((item) => (
                    <div key={item._id} className="p-4 bg-base-100 rounded-xl shadow text-center">
                        <img className="rounded-xl" src={item.image} alt="" />
                        <h3 className="text-xl font-semibold mt-5">{item.name}</h3>
                        <p>Purchased: {item.purchaseCount}</p>
                     
                    </div>
                ))}
            </div>

            <div className="text-center mt-6">
                <button className="bg-green-600 text-white px-6 py-2 rounded">See All</button>
            </div>
        </div>
    );
};

export default TopFoods;

