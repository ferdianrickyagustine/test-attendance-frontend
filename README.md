# Aplikasi Absensi WFH Karyawan

## Deskripsi
Aplikasi web untuk absensi WFH karyawan. Karyawan dapat login, melihat dan mengubah profil, melakukan absen masuk/pulang, serta melihat riwayat absensi. Semua fitur dipecah ke beberapa halaman sesuai kebutuhan.

Aplikasi ini dibuat menggunakan **Vite** dan **Tailwind CSS** untuk membuat tampilannya.

---

## Fitur

- **Login:** Login dengan email perusahaan & password.
- **Profil:** Lihat dan edit nama, email, foto, posisi, dan nomor HP.
- **Absensi:** Satu halaman khusus untuk absen masuk & pulang (cukup klik tombol).
- **Summary Absen:** Lihat riwayat absensi, bisa filter berdasarkan tanggal.

---

## Navigasi Halaman

- `/login` – Halaman login
- `/profile` – Lihat & edit profil
- `/update-profile` – Edit data diri
- `/update-password` – Ganti password
- `/attendance` – Absen masuk/pulang 
- `/attendance-summary` – Halaman summary/riwayat absen

---

## API yang Digunakan

| Endpoint                        | Method | Keterangan                |
|----------------------------------|--------|---------------------------|
| `/auth/login`                   | POST   | Login                     |
| `/users/profile`                | GET    | Ambil data profil         |
| `/users/profile`                | PUT    | Update profil             |
| `/attendance/check-in`          | POST   | Absen masuk               |
| `/attendance/check-out`         | POST   | Absen pulang              |
| `/attendance/summary`           | GET    | Lihat riwayat absensi     |

> Semua endpoint (kecuali login) butuh token JWT di header `Authorization`.

---

## Cara Menjalankan

1. Jalankan backend (NestJS) di port yang sudah diatur.
2. Jalankan frontend:
    ```bash
    cd client
    npm install
    npm run dev
    ```
3. Buka browser ke `http://localhost:5173`.

---

## Catatan

- Karyawan tidak bisa register sendiri, data user sudah diinput admin.
- Tidak ada halaman register di sisi karyawan.