import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function BaseLayout() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.token) {
            navigate("/login");
            toast.error("Please login first");
        }
    }, [navigate])

    return (
        <>
            <Navbar />
            <div className="mt-18 md:mt-1">
                <Outlet />
            </div>
        </>
    )
}