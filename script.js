function init() {
  setupSpecs();
  setupMenu();
  setupMenuClose();
}

function setupSpecs() {
  const specsGrid = document.getElementById("specs-grid");
  specsGrid.innerHTML = renderSpecs(specs);
}

function setupMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  menuToggle.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  const menuOverlay = document.getElementById("menu-overlay");
  menuOverlay.classList.toggle("is-open");
}

function setupMenuClose() {
  const menuCloseButton = document.getElementById("menu-close");
  menuCloseButton.addEventListener("click", toggleMenu);
}
