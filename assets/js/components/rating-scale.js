/* ==========================================================================
   SKM Rating Scale Component (Emoji + Label - Bab 7.4 PRD v2.0)
   ========================================================================== */

function renderRatingScale(containerId, onSelectCallback) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const scaleOptions = [
    { value: 1, emoji: "😞", label: "Sangat Tidak Puas" },
    { value: 2, emoji: "🙁", label: "Kurang Puas" },
    { value: 3, emoji: "😐", label: "Cukup Puas" },
    { value: 4, emoji: "🙂", label: "Puas" },
    { value: 5, emoji: "😄", label: "Sangat Puas" }
  ];

  container.className = 'rating-scale-group';
  container.innerHTML = scaleOptions.map(opt => `
    <div class="rating-option" data-value="${opt.value}" onclick="selectRatingOption(this, '${containerId}', ${opt.value})">
      <span class="rating-emoji">${opt.emoji}</span>
      <span class="rating-label">${opt.label}</span>
    </div>
  `).join('');

  container._onSelect = onSelectCallback;
}

function selectRatingOption(element, containerId, value) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll('.rating-option').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');

  if (typeof container._onSelect === 'function') {
    container._onSelect(value);
  }
}
