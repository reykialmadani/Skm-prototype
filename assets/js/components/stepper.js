/* ==========================================================================
   SKM Stepper Component (Wizard & Multi-step forms - Bab 8.2.3 & 8.4)
   ========================================================================== */

function renderStepper(containerId, steps, activeStepIndex) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'stepper';
  container.innerHTML = steps.map((step, idx) => {
    let statusClass = '';
    if (idx < activeStepIndex) statusClass = 'completed';
    else if (idx === activeStepIndex) statusClass = 'active';

    return `
      <div class="stepper-step ${statusClass}">
        <div class="step-circle">
          ${idx < activeStepIndex ? '✓' : idx + 1}
        </div>
        <div class="step-label">${step}</div>
      </div>
    `;
  }).join('');
}
