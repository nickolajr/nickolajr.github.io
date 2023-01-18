let openOverlayBtn = document.getElementById("openCV");
let overlay = document.getElementById("Cv");

openOverlayBtn.addEventListener("click", function() {
  overlay.style.display = "block";
});
let closeOverlayBtn = document.getElementById("closeCV");

closeOverlayBtn.addEventListener("click", function() {
  overlay.style.display = "none";
});

