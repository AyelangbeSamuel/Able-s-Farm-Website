// Toggle sidebar menu
const toggleBtn = document.querySelector(".menu-toggle");
const dropdown = document.querySelector(".dropdown");

toggleBtn.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
});

// Toggle theme (Light/Dark)
function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
}
