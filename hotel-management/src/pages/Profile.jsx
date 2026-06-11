// src/pages/Profile.jsx
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { FiUser, FiMail, FiPhone, FiLock, FiCamera } from "react-icons/fi";

const Profile = () => {
  const { user } = useAuth();
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-6">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32">
            <img
              src={profilePic || "https://via.placeholder.com/128"}
              className="w-full h-full rounded-full object-cover"
            />
            <label className="absolute bottom-0 right-0 bg-primary-500 p-2 rounded-full cursor-pointer">
              <FiCamera />
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <h2 className="text-xl font-semibold mt-4">
            {user?.name || "Admin User"}
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 border rounded">
            <FiUser />
            <input
              defaultValue={user?.name}
              className="flex-1 bg-transparent"
            />
          </div>
          <div className="flex items-center gap-3 p-3 border rounded">
            <FiMail />
            <input
              defaultValue={user?.email}
              className="flex-1 bg-transparent"
            />
          </div>
          <div className="flex items-center gap-3 p-3 border rounded">
            <FiLock />
            <input
              type="password"
              placeholder="New Password"
              className="flex-1 bg-transparent"
            />
          </div>
          <button className="w-full bg-primary-500 text-white py-2 rounded-lg">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
