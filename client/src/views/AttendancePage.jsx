import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

export default function AttendancePage() {
    const [attendance, setAttendance] = useState({ checkIn: null, checkOut: null });
    const navigate = useNavigate()

    async function handleCheckIn() {
        try {
            const now = new Date().toISOString();
            const { data } = await axios.post("http://localhost:3002/attendance/check-in", {
                checkInTime: now
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            setAttendance(prev => ({ ...prev, checkIn: now }));
            toast.success("Check-in successful!")
            navigate("/attendance")
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to check in")
        }
    }

    async function handleCheckOut() {
        try {
            const now = new Date().toISOString();
            const { data } = await axios.post("http://localhost:3002/attendance/check-out", {
                checkOutTime: now
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
            setAttendance(prev => ({ ...prev, checkOut: now }));
            toast.success("Check-out successful!")
            navigate("/attendance")
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to check out")
        }
    }

    async function fetchAttendance() {
        try {
            const { data } = await axios.get("http://localhost:3002/attendance/today", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            });
            setAttendance(data);
        } catch (error) {
            toast.error("Failed to load attendance data");
        }
    }

    useEffect(() => {
        fetchAttendance()
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 px-4">
            <h1 className="text-2xl font-bold text-white bg-black/60 rounded-t-lg w-full max-w-md text-center p-5">Attendance Page</h1>
            <div className="w-full max-w-md bg-black/60 rounded-b-lg shadow flex items-center gap-6 p-5">
                <button className="w-1/2 border border-gray-300/60 items-center gap-4 bg-green-600 transition-colors hover:bg-green-800 rounded-lg text-center text-white" onClick={handleCheckIn}>
                    <div className="pt-10 text-2xl">{attendance.checkIn && new Date(attendance.checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    <div className="p-2 border border-gray-300/60 rounded-b-lg w-full mt-10" >Check In</div>
                </button>
                <button className="w-1/2 border border-gray-300/60 items-center gap-4 bg-orange-600 transition-colors hover:bg-orange-800 rounded-lg text-center text-white" onClick={handleCheckOut}>
                    <div className="pt-10 text-2xl">{attendance.checkOut && new Date(attendance.checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    <div className="p-2 rounded-b-lg w-full mt-10 border border-gray-300/60">Check Out</div>
                </button>
            </div>
        </div>
    )
}