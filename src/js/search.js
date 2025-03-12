document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-id");
  const searchMenu = document.getElementById("search-dropdown");
  const searchClose = document.getElementById("search-close");

  // Show Search Dropdown with Delay
  searchIcon.addEventListener("click", function () {
    searchMenu.classList.remove("opacity-0", "pointer-events-none");
    searchMenu.classList.add("opacity-100");
    searchMenu.style.top = "0"; // Moves it into view
  });

  // Close Search Dropdown
  searchClose.addEventListener("click", function () {
    searchMenu.classList.add("opacity-0", "pointer-events-none");
    searchMenu.style.top = "-50vh"; // Moves it back up
  });
});
