export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-radial-[at_50%_20%] from-gray-800 to-gray-600 px-4">
      <div className="w-full max-w-md bg-black/60 rounded-lg shadow p-6 flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-white mb-2">Absensi WFH Karyawan</h1>
        <p className="text-white text-center">Selamat datang di aplikasi absensi. Silakan pilih untuk mulai absen atau melihat data Anda.</p>
        <div className="flex gap-3 mt-4 w-full">
          <a href="/attendance" className="flex-1 bg-green-600 text-white rounded py-2 text-center hover:bg-green-700 transition">Absen</a>
          <a href="/attendance-summary" className="flex-1 bg-gray-200 text-gray-800 rounded py-2 text-center hover:bg-gray-300 transition">Summary</a>
        </div>
      </div>
    </div>
  )
}