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
                    <li>
                        <Link to="/dashboard/myProfile" className="block hover:bg-green-600 p-2 rounded">
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addFood" className="block hover:bg-green-600 p-2 rounded">
                            AddFood
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/myFood" className="block hover:bg-green-600 p-2 rounded">
                            MyFood
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/myOrders" className="block hover:bg-green-600 p-2 rounded">
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
