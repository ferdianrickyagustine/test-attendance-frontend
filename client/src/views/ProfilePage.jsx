

import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchProfile() {
    try {
      const { data } = await axios.get("http://localhost:3001/users/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setProfile(data);
      toast.info("Profile loaded successfully!");
    } catch (error) {
      toast.info(error?.response?.data?.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(e) {
    try {
      const image = e.target.files[0];
      const formData = new FormData();
      formData.append("file", image);
      const { data } = await axios.patch(
        "http://localhost:3001/users/profile/photo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.info(data.message || "Photo updated!");
      fetchProfile();
    } catch (error) {
      toast.info(error?.response?.data?.message || "Failed to update photo");
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 p-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden">
          <div className="bg-gray-100 flex flex-col items-center justify-center md:w-1/2 w-full p-10">
            <div className="relative flex justify-center mb-6">
              <div
                className="group relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg cursor-pointer"
                onClick={() => document.getElementById("fileInputProfile").click()}
              >
                <img
                  src={profile.photoUrl || "https://ui-avatars.com/api/?name=User&background=random"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-bold">Edit Photo</span>
                </div>
              </div>
              <input
                type="file"
                id="fileInputProfile"
                className="hidden"
                accept="image/*"
                onChange={handleUpload}
              />
            </div>
            <button
              className="mt-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Change Password
            </button>
          </div>
          <div className="bg-black flex flex-col justify-center md:w-1/2 w-full p-10 text-white">
            <h1 className="mb-8 text-3xl font-bold text-white">Profile</h1>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400 text-sm">Name</span>
                <div className="text-lg font-medium mt-1">{profile.name}</div>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Phone</span>
                <div className="text-lg font-medium mt-1">{profile.phone}</div>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Position</span>
                <div className="text-lg font-medium mt-1">{profile.position}</div>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Email</span>
                <div className="text-lg font-medium mt-1">{profile.email}</div>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Role</span>
                <div className="text-lg font-medium mt-1">{profile.role}</div>
              </div>
            </div>
            <button
              className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
