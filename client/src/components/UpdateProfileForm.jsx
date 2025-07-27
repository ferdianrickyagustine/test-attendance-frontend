import { useEffect, useState } from "react"

export default function UpdateProfileForm({ handleSubmit, profile }) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    useEffect(() => {
        if (profile) {
            setName(profile.name || "")
            setPhone(profile.phone || "")
            setEmail(profile.email || "")
        }
    }, [profile])

    return (
        <div className="min-h-screen flex items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 p-4">
            <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-8">
                <h1 className="text-2xl font-bold text-white mb-8 text-center">Update Profile</h1>
                <form onSubmit={(e) => handleSubmit(e, name, phone, email)} className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="phone"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <input
                        type="email"
                        className="input input-bordered bg-gray-300 w-full px-3 py-2 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-black/80 mb-4"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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