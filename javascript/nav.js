// // event listeners
// var button = document.getElementById("navbar");
// var navs = button.getElementsByClassName("nav");
// for (var i = 0; i < navs.length; i++) {
//   navs[i].addEventListener("click", function() {
//     var selected = document.getElementsByClassName("active");
//     if (selected.length != 0) {
//       selected[0].className = "nav";
//     }
//     this.className = "active";
//   });
// }

//go to place
function navscroll(link) {
  var goto = document.getElementById(link).offsetTop - 100;
  window.scrollTo(0, goto);
}

//ezfix
// window.onscroll = function() {
//   document.getElementById("navAbout").className = "nav";
//   document.getElementById("navSkills").className = "nav";
//   document.getElementById("navEducation").className = "nav";
//   document.getElementById("navProjects").className = "nav";
//   if (
//     window.pageYOffset >
//     document.getElementById("projects").offsetTop - 300
//   ) {
//     document.getElementById("navProjects").className = "active";
//   } else if (
//     window.pageYOffset >
//     document.getElementById("education").offsetTop - 300
//   ) {
//     document.getElementById("navEducation").className = "active";
//   } else if (
//     window.pageYOffset >
//     document.getElementById("skills").offsetTop - 300
//   ) {
//     document.getElementById("navSkills").className = "active";
//   } else if (
//     window.pageYOffset >
//     document.getElementById("about").offsetTop - 200
//   ) {
//     document.getElementById("navAbout").className = "active";
//   }
// };

//betterfix
window.onscroll = function() {
  var activeNav = document.getElementsByClassName("active");
  for (var i = 0; i < activeNav.length; i++) {
    activeNav[i].className = "nav";
  } //dit werkt
  var nav = document.getElementsByClassName("nav");
  var contentbox = document.getElementsByClassName("contentbox");
  for (var i = nav.length - 1; i >= 0; i--) {
    if (i == 0 && window.pageYOffset > contentbox[i].offsetTop - 150) {
      nav[i].className = "active";
      break;
    } else if (i != 0 && window.pageYOffset > contentbox[i].offsetTop - 350) {
      nav[i].className = "active";
      break;
    }
  }
};
