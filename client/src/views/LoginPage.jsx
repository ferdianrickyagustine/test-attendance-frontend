import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.token) {
            toast.info("You are already logged in");
            navigate("/");
        }
    }, [navigate])

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:3000/auth/login", { email, password });
            localStorage.setItem("token", data.token)
            navigate("/");
            toast.success("Login successful");
        } catch (error) {
            console.log(error.response?.data || error.message);
            toast.error("Email atau password salah")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 p-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">Login</h2>
                <input
                    type="email"
                    className="input input-bordered w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/80"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input input-bordered w-full px-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black/80"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <button
                    type="submit"
                    className="w-full bg-black/60 hover:bg-black text-white font-semibold py-2 rounded transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
}