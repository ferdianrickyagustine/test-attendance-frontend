import { useNavigate } from "react-router";

export default function Navbar() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <nav className="fixed top-0 w-full bg-black text-white p-6 flex justify-between z-50">
            <div className="font-bold text-xl">
                <a href="/" className="ml-10 transition-all duration-300 ease-in-out hover:text-gray-400">Home</a>
            </div>
            <div className="flex gap-10 mr-10 font-bold text-xl">
                <a href="/profile" className="transition-all duration-300 ease-in-out hover:text-green-500">Profile</a>
                <button onClick={handleLogout} className="cursor-pointer transition-all duration-300 ease-in-out hover:text-red-500">Logout</button>
            </div>
        </nav>
    );
}