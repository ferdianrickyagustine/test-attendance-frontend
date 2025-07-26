import { BrowserRouter, Routes, Route } from "react-router"
import RegisterPage from "./views/RegisterPage"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

