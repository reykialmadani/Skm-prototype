/* ==========================================================================
   SKM Cascading Select Component (Master Wilayah - Bab 8.1.5 & 8.2.4)
   ========================================================================== */

function initCascadingWilayahSelect(provId, kabId, kecId, desaId) {
  const data = getStoredData().wilayah;
  const provEl = document.getElementById(provId);
  const kabEl = document.getElementById(kabId);
  const kecEl = document.getElementById(kecId);
  const desaEl = document.getElementById(desaId);

  if (!provEl) return;

  // Populate Provinsi
  provEl.innerHTML = '<option value="">-- Pilih Provinsi --</option>' +
    data.provinsi.map(p => `<option value="${p.id}">${p.nama}</option>`).join('');

  provEl.addEventListener('change', (e) => {
    const val = e.target.value;
    if (kabEl) {
      kabEl.innerHTML = '<option value="">-- Pilih Kab/Kota --</option>';
      if (val && data.kabKota[val]) {
        kabEl.innerHTML += data.kabKota[val].map(k => `<option value="${k.id}">${k.nama}</option>`).join('');
      }
    }
    if (kecEl) kecEl.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
    if (desaEl) desaEl.innerHTML = '<option value="">-- Pilih Kelurahan/Desa --</option>';
  });

  if (kabEl) {
    kabEl.addEventListener('change', (e) => {
      const val = e.target.value;
      if (kecEl) {
        kecEl.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
        if (val && data.kecamatan[val]) {
          kecEl.innerHTML += data.kecamatan[val].map(kc => `<option value="${kc.id}">${kc.nama}</option>`).join('');
        }
      }
      if (desaEl) desaEl.innerHTML = '<option value="">-- Pilih Kelurahan/Desa --</option>';
    });
  }

  if (kecEl) {
    kecEl.addEventListener('change', (e) => {
      const val = e.target.value;
      if (desaEl) {
        desaEl.innerHTML = '<option value="">-- Pilih Kelurahan/Desa --</option>';
        if (val && data.desa[val]) {
          desaEl.innerHTML += data.desa[val].map(d => `<option value="${d.id}">${d.nama}</option>`).join('');
        }
      }
    });
  }
}
