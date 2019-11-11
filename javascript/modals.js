var modalmode = document.getElementById("modalmode");
var modal = document.getElementById("modal");
var modalbar = document.getElementById("modalbar");
modal.style.height = "550px";
modal.style.width = "800px";

var projectGidrone = document.getElementById("project1");

projectGidrone.onclick = function() {
  modalmode.style.display = "block";
  startGidrone();
};

modalbar.onclick = function() {
  modalmode.style.display = "none";
};
