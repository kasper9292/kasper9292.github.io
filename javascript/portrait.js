var canv = document.getElementById('portrait');
var cont = canv.getContext('2d');
var contentbox = document.getElementById('contentbox');
var resetbut = document.getElementById('resetbut');
// cont.fillStyle = "white";
// cont.fillRect(0, 0, 150, 150);

var drawing = false,
  drawingdot = false,
  pmx = 0,
  pmy = 0,
  mx = 0,
  my = 0;

canv.addEventListener('mousemove', function(e) {
  draw('move');
  refreshmouse(e);
});
canv.addEventListener('mousedown', function(e) {
  draw('down');
});
canv.addEventListener('mouseup', function(e) {
  draw('up');
});
canv.addEventListener('mouseout', function(e) {
  draw('out');
});

function refreshmouse(e) {
  pmx = mx;
  pmy = my;
  mx = e.clientX - contentbox.offsetLeft - 24;
  my = e.clientY - contentbox.offsetTop - 55;
}

function draw(state) {
  if (state == 'down') {
    drawing = true;
    drawdot();
  } else if (state == 'move') {
    if (drawing) {
      drawline();
    }
  } else {
    drawing = false;
  }
}

function drawline() {
  cont.beginPath();
  cont.moveTo(pmx, pmy);
  cont.lineTo(mx, my);
  cont.strokeStyle = 'black';
  cont.lineWidth = 3;
  cont.stroke();
  cont.closePath();
  resetbut.style.display = 'block';
}

function drawdot() {
  cont.beginPath();
  cont.arc(mx, my, 1.5, 0, 2 * Math.PI);
  cont.strokeStyle = 'black';
  cont.lineWidth = 1;
  cont.fillStyle = 'black';
  cont.fill();
  cont.stroke();
  resetbut.style.display = 'block';
}

// reset
resetbut.addEventListener('click', function() {
  cont.clearRect(0, 0, canv.width, canv.height);
  resetbut.style.display = 'none';
});
