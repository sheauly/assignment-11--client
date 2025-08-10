import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const { darkMode } = useContext(AuthContext);

    if (!user) {
        return <p className="text-center mt-10">Please login to see your profile.</p>;
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-6">

            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow p-6 flex items-center gap-6">
                <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}&background=0D8ABC&color=fff&size=128`}
                    alt={user.displayName || "User Profile"}
                    className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
                />
                <div className="flex-1">
                    <h2 className={`${darkMode ? "text-gray-300" : "text-black"} text-3xl font-bold `}>{user.displayName || "No Name"}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
                <button className="btn btn-primary">Edit Profile</button>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h3 className={`${darkMode ? "text-gray-300" : "text-black"} text-3xl  `}>About</h3>
                <p className="text-gray-700">
                    This is your personal profile page. You can edit your details anytime. Keep your profile updated for a better personalized experience.
                </p>
            </div>

            {/* Login Info Section */}
            <div className="bg-white rounded-lg shadow p-6 flex justify-between text-gray-700">
                <div>
                    <h4 className="font-semibold">Joined On</h4>
                    <p>{new Date(user.metadata.creationTime).toUTCString()}</p>
                </div>
                <div>
                    <h4 className="font-semibold">Last Login</h4>
                    <p>{new Date(user.metadata.lastSignInTime).toUTCString()}</p>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;
