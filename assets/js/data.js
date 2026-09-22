/* ==========================================================================
   SKM Prototype Initial Seed Data (assets/js/data.js)
   ========================================================================== */

const INITIAL_SKM_DATA = {
  // Current logged in user fallback
  currentUser: {
    name: "Drs. Budi Santoso, M.Si",
    role: "admin_unit", // options: 'super_admin', 'admin_unit', 'enumerator', 'public'
    roleName: "Admin Unit Layanan",
    unit: "Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil)",
    avatar: "BS"
  },

  // Role metadata for quick demo switcher
  roles: [
    { id: "super_admin", label: "Super Admin", redirect: "/pages/admin/dashboard.html", user: "Indekstat SysAdmin" },
    { id: "admin_unit", label: "Admin Unit Layanan", redirect: "/pages/unit/dashboard.html", user: "Drs. Budi Santoso, M.Si" },
    { id: "enumerator", label: "Enumerator", redirect: "/pages/enumerator/dashboard.html", user: "Rizky Ramadhan" },
    { id: "public", label: "Responden (Publik)", redirect: "/pages/public/landing.html", user: "Responden Umum" }
  ],

  // Master Unit Layanan
  masterUnits: [
    { id: "U-001", kode: "DISDUKCAPIL", nama: "Dinas Kependudukan & Catatan Sipil", tusi: "Pelayanan Administrasi Kependudukan", alamat: "Jl. Pemuda No. 45, Kota Pusat", totalSurvei: 3, status: "Aktif" },
    { id: "U-002", kode: "DPMPTSP", nama: "Dinas PMPTSP (Pelayanan Terpadu)", tusi: "Pelayanan Perizinan & Penanaman Modal", alamat: "Jl. Merdeka No. 12, Kota Pusat", totalSurvei: 2, status: "Aktif" },
    { id: "U-003", kode: "RSUD-KOTA", nama: "RSUD Kota Serang", tusi: "Pelayanan Kesehatan Masyakat", alamat: "Jl. Kesehatan No. 8, Kota Pusat", totalSurvei: 4, status: "Aktif" },
    { id: "U-004", kode: "PUSKESMAS-A", nama: "Puskesmas Mawar Indah", tusi: "Pelayanan Kesehatan Tingkat Pertama", alamat: "Jl. Mawar No. 3", totalSurvei: 1, status: "Aktif" }
  ],

  // Master Wilayah (Cascading Select)
  wilayah: {
    provinsi: [
      { id: "31", nama: "DKI Jakarta" },
      { id: "32", nama: "Jawa Barat" },
      { id: "36", nama: "Banten" }
    ],
    kabKota: {
      "36": [
        { id: "3671", nama: "Kota Tangerang" },
        { id: "3673", nama: "Kota Serang" },
        { id: "3604", nama: "Kabupaten Serang" }
      ]
    },
    kecamatan: {
      "3673": [
        { id: "367301", nama: "Kecamatan Serang" },
        { id: "367302", nama: "Kecamatan Cipocok Jaya" }
      ]
    },
    desa: {
      "367301": [
        { id: "367301001", nama: "Kelurahan Kotabaru" },
        { id: "367301002", nama: "Kelurahan Lopang" }
      ]
    }
  },

  // Master Question Bank (9 Unsur SKM PermenPANRB No 14/2017)
  questionBank: [
    {
      id: "Q-001",
      unsur: "U1 - Persyaratan",
      teks: "Bagaimana pendapat Anda tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya?",
      tipe: "skala_4",
      opsi: ["Tidak Sesuai", "Kurang Sesuai", "Sesuai", "Sangat Sesuai"]
    },
    {
      id: "Q-002",
      unsur: "U2 - Prosedur",
      teks: "Bagaimana kemudahan prosedur pelayanan di unit ini?",
      tipe: "skala_4",
      opsi: ["Tidak Mudah", "Kurang Mudah", "Mudah", "Sangat Mudah"]
    },
    {
      id: "Q-003",
      unsur: "U3 - Waktu Pelayanan",
      teks: "Bagaimana kecepatan waktu dalam memberikan pelayanan?",
      tipe: "skala_4",
      opsi: ["Tidak Cepat", "Kurang Cepat", "Cepat", "Sangat Cepat"]
    },
    {
      id: "Q-004",
      unsur: "U4 - Biaya/Tarif",
      teks: "Bagaimana kewajaran biaya/tarif dalam pelayanan ini?",
      tipe: "skala_4",
      opsi: ["Sangat Mahal", "Cukup Mahal", "Murah", "Gratis / Sesuai Aturan"]
    },
    {
      id: "Q-005",
      unsur: "U5 - Produk Spesifikasi Jenis Pelayanan",
      teks: "Bagaimana kesesuaian antara produk pelayanan yang tercantum dalam standar pelayanan dengan hasil yang diberikan?",
      tipe: "skala_4",
      opsi: ["Tidak Sesuai", "Kurang Sesuai", "Sesuai", "Sangat Sesuai"]
    },
    {
      id: "Q-006",
      unsur: "U6 - Kompetensi Pelaksana",
      teks: "Bagaimana kemampuan dan kompetensi petugas dalam memberikan pelayanan?",
      tipe: "skala_4",
      opsi: ["Tidak Kompeten", "Kurang Kompeten", "Kompeten", "Sangat Kompeten"]
    },
    {
      id: "Q-007",
      unsur: "U7 - Perilaku Pelaksana",
      teks: "Bagaimana sikap dan kesopanan petugas dalam memberikan pelayanan?",
      tipe: "skala_4",
      opsi: ["Tidak Sopan", "Kurang Sopan", "Sopan", "Sangat Sopan & Ramah"]
    },
    {
      id: "Q-008",
      unsur: "U8 - Penanganan Pengaduan",
      teks: "Bagaimana penanganan pengaduan pengguna layanan di unit ini?",
      tipe: "skala_4",
      opsi: ["Buruk", "Cukup", "Baik", "Sangat Baik"]
    },
    {
      id: "Q-009",
      unsur: "U9 - Sarana dan Prasarana",
      teks: "Bagaimana kualitas dan kenyamanan sarana dan prasarana di tempat layanan?",
      tipe: "skala_4",
      opsi: ["Buruk", "Cukup Baik", "Baik", "Sangat Nyaman & Lengkap"]
    },
    {
      id: "Q-010",
      unsur: "Saran & Masukan",
      teks: "Berikan saran atau masukan Anda untuk peningkatan pelayanan kami:",
      tipe: "terbuka",
      opsi: []
    }
  ],

  // Active Surveys
  surveys: [
    {
      id: "SRV-2026-01",
      nama: "Survei Kepuasan Layanan KTP Elektronik & KK 2026",
      unitId: "U-001",
      unitNama: "Dinas Kependudukan & Catatan Sipil",
      periode: "01 Jan 2026 - 31 Des 2026",
      status: "Aktif",
      populasi: 10000,
      targetSample: 385,
      totalResponse: 238,
      pertanyaanCount: 10,
      skipLogicActive: true
    },
    {
      id: "SRV-2026-02",
      nama: "Survei Kepuasan Perizinan Usaha UMKM",
      unitId: "U-002",
      unitNama: "Dinas PMPTSP",
      periode: "01 Feb 2026 - 30 Jun 2026",
      status: "Aktif",
      populasi: 2500,
      targetSample: 333,
      totalResponse: 145,
      pertanyaanCount: 9,
      skipLogicActive: false
    },
    {
      id: "SRV-2026-03",
      nama: "Survei Kepuasan Rawat Jalan RSUD",
      unitId: "U-003",
      unitNama: "RSUD Kota Serang",
      periode: "15 Jan 2026 - 15 Jul 2026",
      status: "Draft",
      populasi: 5000,
      targetSample: 357,
      totalResponse: 0,
      pertanyaanCount: 10,
      skipLogicActive: false
    }
  ],

  // Enumerator Tasks
  enumeratorAssignments: [
    {
      id: "ASN-101",
      surveyId: "SRV-2026-01",
      surveyNama: "Survei Kepuasan Layanan KTP & KK",
      lokasi: "Loket 3 Disdukcapil (Gedung Pelayanan Utama)",
      target: 30,
      selesai: 18,
      status: "Berjalan"
    },
    {
      id: "ASN-102",
      surveyId: "SRV-2026-02",
      surveyNama: "Survei Kepuasan Perizinan Usaha UMKM",
      lokasi: "MPP (Mal Pelayanan Publik) Lt. 2",
      target: 20,
      selesai: 20,
      status: "Selesai"
    }
  ],

  // Offline Drafts for Enumerator
  enumeratorDrafts: [
    {
      id: "DFT-991",
      surveyNama: "Survei Kepuasan Layanan KTP & KK",
      respondenNama: "Bpk. Hendra Gunawan",
      progress: 60,
      lastModified: "22 Sep 2026, 14:15"
    }
  ]
};

// Initialize localStorage if not present
if (!localStorage.getItem('SKM_APP_DATA')) {
  localStorage.setItem('SKM_APP_DATA', JSON.stringify(INITIAL_SKM_DATA));
}

function getStoredData() {
  const data = localStorage.getItem('SKM_APP_DATA');
  return data ? JSON.parse(data) : INITIAL_SKM_DATA;
}

function saveStoredData(data) {
  localStorage.setItem('SKM_APP_DATA', JSON.stringify(data));
}
