var datum = new Date().toString();
datum = datum.split(" ");
document.getElementById("datum").innerHTML =
  "[ " + datum[0] + " " + datum[1] + " " + datum[2] + " " + datum[3] + " ]";
