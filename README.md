# 🏛️ Prototype Website SKM (Survei Kepuasan Masyarakat)

Website SKM membantu Unit Layanan Publik merancang, mendistribusikan, mengumpulkan, dan memantau survei kepuasan masyarakat — sesuai PermenPANRB No. 14 Tahun 2017.

---

## 🚀 Cara Menjalankan Server Lokal (Start & Stop)

### Start Server:
Buka PowerShell di folder ini, lalu jalankan:

```powershell
python -m http.server 8080 --directory C:\skmprototype
```
Buka browser: **`http://localhost:8080`**

### Stop Server:
Tekan tombol **`Ctrl + C`** di terminal.

---

## 🌐 Cara Deploy ke GitHub Pages (Step-by-Step)

### 1. Push ke GitHub
```powershell
git init
git add .
git commit -m "feat: Initial prototype SKM"
git branch -M main
git remote add origin https://github.com/USERNAME/skmprototype.git
git push -u origin main
```

### 2. Aktifkan GitHub Pages
1. Masuk ke Repository GitHub Anda > **Settings** > **Pages**.
2. Pada **Branch**, pilih `main` dan `/ (root)`.
3. Klik **Save**.
4. Website akan live di `https://USERNAME.github.io/skmprototype/` dalam 1-2 menit.

---
Untuk panduan detail lengkap, silakan lihat [GUIDE_RUNNING_AND_DEPLOY.md](file:///C:/skmprototype/GUIDE_RUNNING_AND_DEPLOY.md).
