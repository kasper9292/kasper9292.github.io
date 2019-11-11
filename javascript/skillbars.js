var start = 4.72;
var pos = 75;
var speed = 2;
var diff, diff2;

function loadbars(name, percent, color) {
  // get canvas and context
  switch (name) {
    case 'Java':
      var canv = document.getElementById('canvjava');
      var cont = canv.getContext('2d');
      break;
    case 'JavaScript':
      var canv = document.getElementById('canvjavascript');
      var cont = canv.getContext('2d');
      break;
    case 'CSS3':
      var canv = document.getElementById('canvcss');
      var cont = canv.getContext('2d');
      break;
    case 'HTML5':
      var canv = document.getElementById('canvhtml');
      var cont = canv.getContext('2d');
      break;
    case 'Angular':
      var canv = document.getElementById('canvangular');
      var cont = canv.getContext('2d');
      break;
    case 'Spring':
      var canv = document.getElementById('canvspring');
      var cont = canv.getContext('2d');
      break;
  }

  var nul = 0;
  function draw() {
    diff = (nul / 100) * Math.PI * 2 * 10;
    cont.clearRect(0, 0, canv.width, canv.height);

    // draw background
    cont.clearRect(0, 0, canv.width, canv.height);
    diff2 = Math.PI * 2 * 10;
    cont.lineWidth = 4;
    cont.strokeStyle = '#ddd';
    cont.beginPath();
    cont.arc(pos, pos, 60, start, diff2 / 10 + start);
    cont.stroke();
    cont.fillStyle = '#ddd';
    // cont.fill();

    // draw bar
    cont.lineWidth = 8;
    cont.fillStyle = 'rgb(50,50,50)';
    cont.strokeStyle = color;
    // cont.strokeStyle = 'rgb(64, 89, 191) ';
    cont.textAlign = 'center';
    cont.font = 'bold 18px Karla';
    cont.fillText(name, pos, 69);
    cont.fillText(nul + '%', pos, 91);
    cont.beginPath();
    // cont.lineCap = 'round';
    cont.arc(pos, pos, 60, start, diff / 10 + start);
    cont.stroke();
    if (nul < percent) {
      nul += speed;
      requestAnimationFrame(draw);
    } else if (nul > percent) {
      nul = percent;
      requestAnimationFrame(draw);
    }
  }
  draw();
}
