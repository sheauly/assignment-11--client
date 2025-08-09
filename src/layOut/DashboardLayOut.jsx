import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-green-700 text-white p-5 space-y-4">
                <h2 className="text-xl font-bold border-b border-green-500 pb-2">
                    Dashboard
                </h2>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="block hover:bg-green-600 p-2 rounded">
                            Back to Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/dashboard" className="block hover:bg-green-600 p-2 rounded">
                            Overview
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/addFood" className="block hover:bg-green-600 p-2 rounded">
                            Add Food
                        </Link>
                    </li>
                    <li>
                        <Link to="/myOrders" className="block hover:bg-green-600 p-2 rounded">
                            My Orders
                        </Link>
                    </li>

                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
