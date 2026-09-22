/* ==========================================================================
   SKM Prototype Main JavaScript Engine (assets/js/main.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSidebarActiveState();
  initLucideIcons();
  initModalListeners();
});

// --------------------------------------------------------------------------
// 1. Floating Demo Switcher Bar (PRD Section 8.1.1 Role Switcher)
// --------------------------------------------------------------------------
function initDemoSwitcherBar() {
  // Check if floating demo bar already rendered
  if (document.querySelector('.demo-switcher-bar')) return;

  const data = getStoredData();
  const currentRole = data.currentUser.role;

  const demoBarHtml = `
    <div class="demo-switcher-bar">
      <div class="switcher-label">
        <span>⚡ PROTOTYPE SKM</span>
        <span style="opacity:0.5">|</span>
        <span style="font-weight:400">Mode Demo: <strong>${data.currentUser.name}</strong></span>
      </div>
      <div class="switcher-buttons">
        <span style="font-size:11px; margin-right:4px; opacity:0.8;">Pilih Role:</span>
        ${data.roles.map(role => `
          <button class="demo-switcher-btn ${role.id === currentRole ? 'active' : ''}" 
                  onclick="switchRoleDemo('${role.id}')">
            ${role.label}
          </button>
        `).join('')}
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', demoBarHtml);
  document.body.classList.add('has-demo-bar');
}

function switchRoleDemo(roleId) {
  const data = getStoredData();
  const targetRole = data.roles.find(r => r.id === roleId);
  if (!targetRole) return;

  data.currentUser.role = targetRole.id;
  data.currentUser.name = targetRole.user;
  data.currentUser.roleName = targetRole.label;
  saveStoredData(data);

  showToast(`Beralih role ke: ${targetRole.label}`, 'info');
  setTimeout(() => {
    window.location.href = targetRole.redirect;
  }, 400);
}

// --------------------------------------------------------------------------
// 2. Sidebar Active State & Navigation Helper
// --------------------------------------------------------------------------
function initSidebarActiveState() {
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href && currentPath.includes(href)) {
      item.classList.add('active');
    }
  });
}

// --------------------------------------------------------------------------
// 3. Lucide Icons Auto-Renderer
// --------------------------------------------------------------------------
function initLucideIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// --------------------------------------------------------------------------
// 4. Modal System
// --------------------------------------------------------------------------
function initModalListeners() {
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) closeModal(modal.id);
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// --------------------------------------------------------------------------
// 5. Toast Notification System (Friendly Microcopy Bab 7.6)
// --------------------------------------------------------------------------
function showToast(message, type = 'success') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;
    document.body.appendChild(toastContainer);
  }

  const bgColors = {
    success: '#4C9A6A',
    danger: '#C0392B',
    warning: '#E0A93E',
    info: '#D25353'
  };

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: ${bgColors[type] || '#3A2E2E'};
    color: #FFF;
    padding: 12px 20px;
    border-radius: 12px;
    font-size: 13.5px;
    font-weight: 600;
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: fadeIn 0.3s ease;
  `;
  toast.innerHTML = `<span>${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --------------------------------------------------------------------------
// 6. Logout Handler
// --------------------------------------------------------------------------
function handleLogout() {
  // Determine the correct relative path to login.html based on current page depth
  const path = window.location.pathname;
  let loginPath = './pages/login.html';

  if (path.includes('/pages/admin/') || path.includes('/pages/unit/') || path.includes('/pages/enumerator/') || path.includes('/pages/public/')) {
    loginPath = '../login.html';
  } else if (path.includes('/pages/')) {
    loginPath = './login.html';
  }

  showToast('Berhasil logout. Mengarahkan ke halaman login...', 'info');
  setTimeout(() => {
    window.location.href = loginPath;
  }, 800);
}
