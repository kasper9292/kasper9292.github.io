var dragbar = document.getElementById('dragbar');
var contentbox = document.getElementById('contentbox');
var xadjust = 0,
  yadjust = 0;
drag = false;

// begin in midden
contentbox.style.left =
  window.innerWidth / 2 - contentbox.offsetWidth / 2 + 'px';
contentbox.style.top =
  window.innerHeight / 2 - contentbox.offsetHeight / 2 + 'px';

// drag gedeelte
dragbar.addEventListener('mousedown', function(e) {
  if (!fs) {
    drag = true;
    xadjust = e.clientX - contentbox.offsetLeft;
    yadjust = e.clientY - contentbox.offsetTop;
  }
});

document.addEventListener('mouseup', function(e) {
  drag = false;
});

document.addEventListener('mousemove', function(e) {
  if (drag) {
    // if (dragbar.) {
    contentbox.style.left = e.clientX - xadjust + 'px';
    contentbox.style.top = e.clientY - yadjust + 'px';
    // }
  }
});
