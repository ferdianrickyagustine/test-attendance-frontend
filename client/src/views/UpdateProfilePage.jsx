import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UpdateProfileForm from "../components/UpdateProfileForm";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    async function fetchProfile() {
        try {
            const { data } = await axios.get("http://localhost:3001/users/profile", {
                headers: {
                    Authorization: `Bearer ${localStorage.token }`,
                }
            });
            setProfile(data);
        } catch (error) {
            toast.error("Failed to load profile");            
        }
    }

    async function handleSubmit(e, name, phone, email) {
        e.preventDefault()
        try {
            const body = { name, phone, email }
            const { data } = await axios.put("http://localhost:3001/users/profile", body, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            });
            toast.success("Profile updated successfully!");
            navigate("/profile")
        } catch (error) {
            toast.error("Failed to update profile.");
        }

    }

    useEffect(() => {
        fetchProfile()
    },[])

    return (
        <div>
            <UpdateProfileForm handleSubmit={handleSubmit} profile={profile}/>
        </div>
    );
}