import { BrowserRouter, Routes, Route } from "react-router"
import LoginPage from "./views/LoginPage"
import BaseLayout from "./views/BaseLayout"
import HomePage from "./views/HomePage"
import { Bounce, ToastContainer } from "react-toastify"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/profile" element={<ProfilePage />} />
        <Route path="/update-profile" element={<UpdateProfilePage />} />
        <Route path="/update-password" element={<UpdatePasswordPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/attendance/summary" element={<AttendanceSummaryPage />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

