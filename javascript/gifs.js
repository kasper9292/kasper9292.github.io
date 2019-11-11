var pic = document.getElementById("pic");
var stillin = false;
var timer;

function initgifs() {
  var gif = document.getElementsByClassName("gif");

  // Mouseout
  for (let i = 0; i < gif.length; i++) {
    gif[i].addEventListener("mouseout", function() {
      clearTimeout(timer);
      stillin = false;
      pic.src = "img/static5.gif";
      timer = setTimeout(resetgif, 200);
    });
  }

  // Projecten
  gif[0].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/coding.gif");
  });
  // Fitness1
  gif[1].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/fitness.gif");
  });
  // Boulderen1
  gif[2].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/boulderen.gif");
  });
  // Gamedev
  gif[3].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/gamedev.gif");
  });
  // BML
  gif[4].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/bml.gif");
  });
  // BML2
  gif[5].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/bml.gif");
  });
  // Fitness
  gif[6].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/fitness.gif");
  });
  // Boulderen
  gif[7].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/boulderen.gif");
  });
  // No country for old men
  gif[8].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/ncfom.gif");
  });
  // Twinpeaks
  gif[9].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/twinpeaks.gif");
  });
  // The Office
  gif[10].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/theoffice.gif");
  });
  gif[11].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/zelda.gif");
  });
  gif[12].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/hamburger.gif");
  });
  gif[13].addEventListener("mouseover", function() {
    stillin = true;
    pic.src = "img/static5.gif";
    timer = setTimeout(setgif, 300, "img/koffie.gif");
  });
}

// (re)setgif
function setgif(gif) {
  if (stillin) {
    pic.src = gif;
  }
}
function resetgif() {
  if (!stillin) {
    pic.src = "img/self2.jpg";
  }
}
