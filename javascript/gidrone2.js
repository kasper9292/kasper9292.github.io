function startGidrone() {
  //Set text
  document.getElementById("modaltitel").innerHTML = "Project: G.I. Drone";
  document.getElementById("modaltext").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem accusantium ipsum.";

  //Make canvas and context
  var cvs = document.getElementById("modalcanvas");
  cvs.style.height = "400px";
  cvs.style.width = "764px";
  var ctx = cvs.getContext("2d");

  //load images
  var pin = new Image();
  pin.src = "../img/pin.png";

  //Some variables
  var cvsBound = cvs.getBoundingClientRect();
  var pins = 5;
  var pinx = [0, 5, 10, 15, 100, 200, 300];
  var piny = [
    0,
    5,
    10,
    15,
    50,
    100,
    150
    // Math.floor(Math.random() * 100) + 1
  ];
  var px = 0;
  var py = 0;
  var check = true;

  //Game loop
  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    for (let i = 0; i < pinx.length; i++) {
      // ctx.drawImage(pin, pinx[i] - 7.5, piny[i] - 17, 15, 17);
      ctx.fillStyle = "red";
      ctx.fillRect(pinx[i], piny[i], 5, 5);
    }

    // canv.onclick = function() {
    //   var x = event.clientX - cvsBound.left;
    //   var y = event.clientY - cvsBound.top;
    // };

    cvs.onclick = function() {
      // var mx = event.clientX - cvsBound.left;
      // var my = event.clientY - cvsBound.top;
      var mx = event.clientX - 250;
      var my = event.clientY - 425;
      pinx.push(mx);
      piny.push(my);
      alert(event.clientX + " - " + event.clientY);
    };
    requestAnimationFrame(draw);
  }
  draw();
}

//CIRCLESS
// ctx.beginPath();
// ctx.arc(pinx[i], piny[i], 9, 0, 2 * Math.PI, false);
// ctx.fillStyle = "darkred";
// ctx.fill();
// ctx.lineWidth = 4;
// ctx.strokeStyle = "red";
// ctx.stroke();
