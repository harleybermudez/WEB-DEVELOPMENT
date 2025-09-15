document.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile-icon");
  const dropdown = document.querySelector(".dropdown");

    // safety: if elements aren't present, do nothing
    if (!profile || !dropdown) return;

    // stop propagation so the document click handler doesn't immediately hide it
    profile.addEventListener("click", (e) => {
      e.stopPropagation();
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!profile.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});