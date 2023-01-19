                      //Cv
window.addEventListener('DOMContentLoaded', function() {
    let openOverlayBtn = document.getElementById("openCV");
  let overlay = document.getElementById("Project");
  let closeOverlayBtn = document.getElementById("closeCV");
  openOverlayBtn.addEventListener("click", function() {
    overlay.style.display = "block";
  });
  closeOverlayBtn.addEventListener("click", function() {
    overlay.style.display = "none";
  });
});
                      //test
window.addEventListener('DOMContentLoaded', function() {
    let openOverlayBtn = document.getElementById("openTest");
  let overlay = document.getElementById("Project");
  let closeOverlayBtn = document.getElementById("closeTest");


  openOverlayBtn.addEventListener("click", function() {
    overlay.style.display = "block";
  });
  closeOverlayBtn.addEventListener("click", function() {
    overlay.style.display = "none";
  });
});
