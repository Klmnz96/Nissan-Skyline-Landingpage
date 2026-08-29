function init() {
  setupSpecs();
  setupMenu();
  setupMenuClose();
  setupMenuLinks();
  setupScrollAnimations();
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

  const menuIcon = document.getElementById("menu-icon");
  menuIcon.classList.toggle("is-flipped");
}

function setupMenuClose() {
  const menuCloseButton = document.getElementById("menu-close");
  menuCloseButton.addEventListener("click", toggleMenu);
}

function setupMenuLinks() {
  const menuLinks = document.querySelectorAll(".menu-overlay-links a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", toggleMenu);
  });
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  });

  const elements = document.querySelectorAll(".reveal");
  elements.forEach(function (element) {
    observer.observe(element);
  });
}
