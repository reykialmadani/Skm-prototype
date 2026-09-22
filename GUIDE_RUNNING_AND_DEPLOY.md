# 📖 Panduan Menjalankan & Deploy GitHub Pages — Prototype Website SKM

Dokumen ini berisi panduan langkah demi langkah untuk:
1. **Menjalankan (Start) dan Mematikan (Stop) Server Lokal** di komputer Anda.
2. **Deploy / Hosting Gratis ke GitHub Pages** agar prototype dapat diakses oleh siapa saja via internet.

---

## 🚀 1. Cara Menjalankan (Start) & Mematikan (Stop) Server Lokal

Karena prototype ini dibangun menggunakan **Vanilla HTML, CSS, dan JavaScript**, Anda dapat menjalankannya menggunakan beberapa metode server lokal di bawah ini.

### 🔹 Metode 1: Menggunakan Python (Disarankan / Tanpa Install Tambahan)

#### ▶️ Memulai Server (Start):
Buka terminal **PowerShell** atau **Command Prompt (CMD)** di folder `C:\skmprototype`, lalu jalankan perintah:

```powershell
python -m http.server 8080 --directory C:\skmprototype
```

Setelah server berjalan, buka browser Anda dan akses:
👉 **`http://localhost:8080/index.html`** atau **`http://localhost:8080`**

#### ⏹️ Mematikan Server (Stop):
Di jendela terminal tempat server berjalan:
- Tekan tombol **`Ctrl + C`** pada keyboard.
- Jika ada konfirmasi `Terminate batch job (Y/N)?`, ketik `Y` lalu tekan **Enter**.

---

### 🔹 Metode 2: Menggunakan Node.js (`npx serve`)

Jika komputer Anda sudah terpasang Node.js, Anda dapat menggunakan `npx serve`:

#### ▶️ Memulai Server (Start):
```powershell
npx serve C:\skmprototype -p 8080
```

#### ⏹️ Mematikan Server (Stop):
Tekan **`Ctrl + C`** di terminal.

---

### 🔹 Metode 3: Menggunakan Extension VS Code (Live Server)

1. Buka folder `C:\skmprototype` di **VS Code**.
2. Install extension **Live Server** (oleh Ritwick Dey) dari menu Extensions (`Ctrl + Shift + X`).
3. Klik kanan pada file `index.html` → Pilih **"Open with Live Server"**.
4. Untuk mematikan: Klik tombol **"Port: 5500"** di baris paling bawah VS Code (Status Bar) untuk menghentikannya.

---

## 🌐 2. Panduan Deploy / Hosting Gratis di GitHub Pages

Dengan mengunggah repository ke **GitHub** dan mengaktifkan **GitHub Pages**, prototype Anda dapat diakses secara publik dengan URL seperti `https://username.github.io/skmprototype/`.

### 📋 Prasyarat:
- Akun GitHub (jika belum ada, daftar gratis di [github.com](https://github.com/)).
- Aplikasi **Git** terinstall di komputer.

---

### 🛠️ Langkah 1: Buat Repository Baru di GitHub

1. Buka [github.com/new](https://github.com/new).
2. Isi nama repository, misalnya: `skmprototype` atau `skm-survei-kepuasan`.
3. Pilih **Public** (agar GitHub Pages gratis dapat diakses umum).
4. **Jangan** centang *"Add a README file"* (karena kita akan upload folder proyek lokal).
5. Klik tombol **"Create repository"**.

---

### 🛠️ Langkah 2: Inisialisasi Git & Push dari Komputer Lokal

Buka terminal **PowerShell** di folder proyek (`C:\skmprototype`), lalu jalankan perintah berikut secara berurutan:

```powershell
# 1. Inisialisasi Git lokal
git init

# 2. Tambahkan seluruh file proyek ke staging
git add .

# 3. Buat commit pertama
git commit -m "feat: Initial commit Prototype Website SKM v2.0"

# 4. Ubah nama branch utama menjadi main
git branch -M main

# 5. Hubungkan ke repository GitHub Anda (Ganti YOUR-USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/YOUR-USERNAME/skmprototype.git

# 6. Unggah (push) file ke GitHub
git push -u origin main
```

> 💡 *Catatan:* Saat pertama kali `git push`, browser atau terminal akan meminta Anda untuk login ke akun GitHub.

---

### 🛠️ Langkah 3: Aktifkan GitHub Pages

1. Buka halaman repository Anda di GitHub (contoh: `https://github.com/YOUR-USERNAME/skmprototype`).
2. Masuk ke tab **Settings** (⚙️ Pengaturan di bagian atas).
3. Di menu sebelah kiri, scroll ke bawah dan klik **Pages** (di bawah bagian *Code and automation*).
4. Pada bagian **Build and deployment**:
   - **Source:** Pilih `Deploy from a branch`.
   - **Branch:** Pilih `main` dan folder `/ (root)`.
5. Klik tombol **Save**.

---

### 🛠️ Langkah 4: Akses Website Hasil Deploy

1. Tunggu 1 - 2 menit hingga GitHub selesai memproses build.
2. Refresh halaman Settings > Pages. Anda akan melihat banner berwarna hijau:
   > **"Your site is live at https://YOUR-USERNAME.github.io/skmprototype/"**
3. Klik link tersebut untuk membuka prototype Anda yang sudah **Live online** di internet! 🎉

---

## 📌 Ringkasan Tautan Penting Setelah Deploy:

| Pengguna / Role | URL Akses di GitHub Pages |
|---|---|
| **Portal Demo & Switcher** | `https://YOUR-USERNAME.github.io/skmprototype/` |
| **Super Admin Dashboard** | `https://YOUR-USERNAME.github.io/skmprototype/pages/admin/dashboard.html` |
| **Admin Unit Layanan** | `https://YOUR-USERNAME.github.io/skmprototype/pages/unit/dashboard.html` |
| **Enumerator Lapangan** | `https://YOUR-USERNAME.github.io/skmprototype/pages/enumerator/dashboard.html` |
| **Responden Publik** | `https://YOUR-USERNAME.github.io/skmprototype/pages/public/landing.html` |

---
*Dokumen ini dibuat otomatis untuk Prototype Website SKM (Survei Kepuasan Masyarakat).*
