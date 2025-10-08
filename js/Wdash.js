function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".sidebar a").forEach(link => link.classList.remove("active"));
  const activeLink = Array.from(document.querySelectorAll(".sidebar a")).find(link =>
    link.getAttribute("onclick")?.includes(sectionId)
  );
  if (activeLink) activeLink.classList.add("active");
}

// Set dashboard background when profile picture is uploaded
document.getElementById("profileImage").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("dashboard").style.backgroundImage = `url('${e.target.result}')`;
    };
    reader.readAsDataURL(file);
  }
});
