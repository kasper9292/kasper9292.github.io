var navbar = document.getElementById('navbar');
var buttons = navbar.getElementsByClassName('but');
var content = document.getElementById('content');
var contents = content.getElementsByClassName('cont');

// Startpage: about
reset();
buttons[0].className = 'but active';
contents[0].className = 'cont active';
loadaboutall();

// About
buttons[0].addEventListener('click', function() {
  reset();
  buttons[0].className = 'but active';
  contents[0].className = 'cont active';
  loadaboutall();
});

// Skills
buttons[1].addEventListener('click', function() {
  reset();
  buttons[1].className = 'but active';
  contents[1].className = 'cont active';
  loadbars('Java', 45, 'royalblue');
  loadbars('JavaScript', 65, 'gold');
  loadbars('CSS3', 70, 'RebeccaPurple');
  loadbars('HTML5', 80, 'Crimson');
  loadbars('Angular', 35, 'Salmon');
  loadbars('Spring', 20, 'LightSeaGreen');
});

// Education
buttons[2].addEventListener('click', function() {
  reset();
  buttons[2].className = 'but active';
  contents[2].className = 'cont active';
  loadeducation();
  // laodwork();
});

// Projects
buttons[3].addEventListener('click', function() {
  reset();
  buttons[3].className = 'but active';
  contents[3].className = 'cont active';
});

// Reset all
function reset() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = 'but';
    contents[i].className = 'cont';
  }
}

// Minimize
var minimized = false;
function minimize() {
  var contbox = document.getElementById('contentbox');
  var navcont = document.getElementById('navContent');
  if (!minimized) {
    navcont.style.display = 'none';
    if (!fs) {
      dragbar.style.borderRadius = '10px';
    } else {
      dragbar.style.borderRadius = '0px';
    }
    contbox.style.boxShadow = 'none';
    minimized = true;
  } else {
    navcont.style.display = 'flex';
    if (!fs) {
      dragbar.style.borderRadius = '10px 10px 0px 0px';
    } else {
      dragbar.style.borderRadius = '0px';
    }
    contbox.style.boxShadow =
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    minimized = false;
  }
}

// Fullscreen
var fs = false;
function fullscreen() {
  var contbox = document.getElementById('contentbox');
  var dragbar = document.getElementById('dragbar');
  if (!fs) {
    contbox.style.height = '100%';
    contbox.style.width = '100%';
    contbox.style.top = '0px';
    contbox.style.left = '0px';
    contbox.style.borderRadius = '0px';
    dragbar.style.borderRadius = '0px';
    fs = true;
  } else {
    contbox.style.width = '50%';
    contbox.style.height = '60%';
    contbox.style.left = window.innerWidth / 2 - contbox.offsetWidth / 2 + 'px';
    contbox.style.top =
      window.innerHeight / 2 - contbox.offsetHeight / 2 + 'px';
    contbox.style.borderRadius = '10px 10px 0px 0px';
    dragbar.style.borderRadius = '10px 10px 0px 0px';
    fs = false;
  }
}

// underlines
var ove = document.getElementById('h3ove');
ove.style.backgroundSize = '100px 8px';
var hob = document.getElementById('h3hob');
hob.style.backgroundSize = '136px 8px';
var pro = document.getElementById('h3pro');
pro.style.backgroundSize = '65px 8px';
var fra = document.getElementById('h3fra');
fra.style.backgroundSize = '65px 8px';
var opl = document.getElementById('h3opl');
opl.style.backgroundSize = '146px 8px';
var proj = document.getElementById('h3proj');
proj.style.backgroundSize = '115px 8px';
