export default function Navbar() {

    return (
        <nav className="fixed top-0 w-full bg-black text-white p-6 flex justify-between z-50">
            <a href="/">Home</a>
            <a href="/profile">Profile</a>
        </nav>
    );
}