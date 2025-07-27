import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function UpdatePasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const body = { newPassword, confirmPassword }
            const { data } = await axios.put("http://localhost:3001/users/change-password", body, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            toast.success("Password updated successfully!");
            navigate("/profile");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update password");
        }
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 p-4">
            <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-8">
                <h1 className="text-2xl font-bold text-white mb-8 text-center">Update Password</h1>
                <form onSubmit={(e) => handleSubmit(e, newPassword, confirmPassword)}>
                    <input
                        type="password"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="New Password"
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                        required
                    />
                    <input
                        type="password"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="Confirm New Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600/80 text-white rounded py-2 hover:bg-green-700/80 transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}