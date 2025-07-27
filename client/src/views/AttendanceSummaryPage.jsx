import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AttendanceSummaryPage() {
    const [summary, setSummary] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    async function fetchSummary(startDate, endDate) {
        try {
            const params = {}
            if (startDate) params.startDate = startDate
            if (endDate) params.endDate = endDate
            const { data } = await axios.get("http://localhost:3002/attendance/summary", {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
                params
            });
            setSummary(data);
        } catch (error) {
            toast.error("Failed to load attendance summary");
        }
    }

    useEffect(() => {
        fetchSummary();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 px-4">
            <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-6 flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold text-white mb-2">Attendance Summary</h1>
                <div className="flex flex-col gap-2 mb-4 bg-white p-3 rounded w-full ">
                    <input className="border border-gray-300 rounded px-2 py-1" type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    <input className="border border-gray-300 rounded px-2 py-1" type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors"
                        onClick={() => fetchSummary(startDate, endDate)}
                    >
                        Filter
                    </button>
                </div>
                <div className="flex flex-col gap-2 mt-4 w-full">
                    {summary.length === 0 ? (
                        <div className="text-white text-center">No attendance data.</div>
                    ) : (
                        summary.map((item, idx) => (
                            <div key={idx} className="bg-gray-800 rounded p-3 text-white flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <span className="font-semibold">{new Date(item.date).toLocaleDateString()}</span>
                                    <span className="ml-2">Status: {item.status}</span>
                                </div>
                                <div className="flex gap-4 mt-2 md:mt-0">
                                    <span>Check In: {item.checkIn ? new Date(item.checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}</span>
                                    <span>Check Out: {item.checkOut ? new Date(item.checkOut).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}