// -- CANVAS & CONTEXT --
var cvs = document.getElementById('canvas');
cvs.style.marginLeft = '15px';
cvs.style.marginTop = '15px';
cvs.style.border = '1px solid black';
var ctx = cvs.getContext('2d');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');

// -- LOAD IAMGES --
var pin = new Image();
pin.src = '../img/pin4.png';
var base = new Image();
base.src = '../img/base9.png';
var map = new Image();
map.src = '../img/map3.png';

// -- VARIABLES --
var state = 'free';
var cvsBound = cvs.getBoundingClientRect();
var pinmax = 6;
var pincount = 0;
var pinsize = 35;
var basesize = 60;
var basex = cvs.width / 2;
var basey = cvs.height - basesize / 2 + 10;
var pinx = [basex];
var piny = [basey];
var pinarray = [];
var pinarray2 = [1, 2, 3, 4, 5];
var pathx = [];
var pathy = [];
var allpaths = [];
var path = 1;
var counter = 0;
var korteroutes = 0;
var kortsteafstand = 99999999999999999;
var kortsteroute = [];

// -- CONTROLS --
// button 1
button1.onclick = function() {
  if (pincount > 0) {
    if (state != 'calculate') {
      state = 'calculate';
      makearray();
      heapsalg(pinarray, 1, pinarray.length - 2);
    } else {
      alert('route is al berekend');
    }
  } else {
    alert('plaats pinnen');
  }
};

// button 2
button2.onclick = function() {
  pinx = [basex];
  piny = [basey];
  pinarray = [];
  allpaths = [];
  pincount = 0;
  state = 'free';
  counter = 0;
  korteroutes = 0;
  kortsteafstand = 99999999999999;
  kortsteroute = [];
  console.clear();
};

// map
cvs.onclick = function() {
  if (state == 'free') {
    if (pincount < pinmax) {
      // homebase verwijderen
      if (pinx.length > 1 && piny.length > 1) {
        pinx.pop();
        piny.pop();
      }

      // nieuwe locatie
      var mousex = event.clientX - cvsBound.left;
      var mousey = event.clientY - cvsBound.top;
      pinx.push(mousex);
      piny.push(mousey);
      pincount++;

      //base plaatsen
      pinx.push(basex);
      piny.push(basey);
    } else {
      alert('max ' + pinmax + ' pinnen');
    }
  }
};

// -- MATH --
// amount possible paths
function permutate(pincount) {
  let p = pincount;
  while (p > 1) {
    p--;
    pincount *= p;
  }
  return pincount;
}

// make main array
function makearray() {
  for (let i = 0; i < pinx.length; i++) {
    if (i === 0 || i === pinx.length - 1) {
      pinarray.push({ id: 'base', x: pinx[i], y: piny[i] });
    } else {
      pinarray.push({ id: i, x: pinx[i], y: piny[i] });
    }
  }
}

// heaps algoritme
function heapsalg(array, mover, endpoint) {
  if (mover === endpoint) {
    calculatedistance(array);
    addtopaths(array);
  } else {
    for (let i = mover; i <= endpoint; i++) {
      swap(array, mover, i);
      heapsalg(array, mover + 1, endpoint);
      swap(array, mover, i);
    }
  }
}

// heaps swap
function swap(array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

// bereken afstand (wordt gedaan bij elke nieuwe permutatie)
function calculatedistance(array) {
  // afstand
  var afstand = 0;
  for (let i = 0; i < array.length - 1; i++) {
    afstand += Math.sqrt(
      Math.pow(array[i + 1].x - array[i].x, 2) +
        Math.pow(array[i + 1].y - array[i].y, 2)
    );
  }
  if (afstand < kortsteafstand) {
    kortsteafstand = afstand;
    korteroutes = 1;
    addtokortste(array);
  } else if (afstand === kortsteafstand) {
    korteroutes++;
  }
  // console.log(afstand);

  // print
  let tempstring = '';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      tempstring += array[i].id;
    } else {
      tempstring += array[i].id + ' > ';
    }
  }
  // console.log(
  //   'volgorde: ' + tempstring + ', afstand: ' + Math.round(afstand) + 'px'
  // );

  // allpaths.push(pinarray);
  // // console.log(array);
  // // for (let i = 0; i < array.length; i++) {
  // //   console.log(array[i].id);
  // // }
  // for (let i = 0; i < allpaths.length; i++) {
  //   for (let j = 0; j < pinarray.length; j++) {
  //     // console.log(allpaths[i][j].id);
  //   }
  // }
  // console.log(array);
  // console.log(pinarray);
}

// add new permutation to paths array
function addtopaths(array) {
  let temparray = [];
  for (let i = 0; i < array.length; i++) {
    temparray.push(array[i]);
  }
  // console.log(temparray);

  allpaths.push(temparray);
  if (allpaths.length === permutate(pincount)) {
    // console.log(allpaths);
    // shuffle(allpaths);
    console.log(kortsteafstand);
    console.log(kortsteroute);
  }
  // console.log(allpaths);
  // for (let i = 0; i < allpaths.length; i++) {
  //   for (let j = 0; j < pinarray.length; j++) {
  //     console.log(allpaths[i][j].id);
  //   }
  // }
}

// individuele dingen een voor een overzetten
function addtokortste(array) {
  kortsteroute = [];
  for (let i = 0; i < array.length; i++) {
    kortsteroute.push(array[i]);
  }
}

// -- DRAW LOOP --
function draw() {
  // draw background
  ctx.drawImage(map, 0, 0, cvs.width, cvs.height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  if (state == 'free') {
  } else if (
    state == 'calculate' &&
    allpaths.length > 0 &&
    counter < allpaths.length - 1
  ) {
    // draw lines
    for (let i = 0; i < allpaths[counter].length - 1; i++) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.beginPath();
      ctx.moveTo(allpaths[counter][i].x, allpaths[counter][i].y);
      ctx.lineTo(allpaths[counter][i + 1].x, allpaths[counter][i + 1].y);
      ctx.stroke();
      if (counter < allpaths.length - 1) {
        counter++;
      }
    }

    // werkt
    // for (let j = 0; j < allpaths.length; j++) {
    //   for (let i = 0; i < allpaths[j].length - 1; i++) {
    //     ctx.lineWidth = 3;
    //     ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    //     ctx.beginPath();
    //     ctx.moveTo(allpaths[j][i].x, allpaths[j][i].y);
    //     ctx.lineTo(allpaths[j][i + 1].x, allpaths[j][i + 1].y);
    //     ctx.stroke();
    //   }
    // }
  }
  if (
    state == 'calculate' &&
    allpaths.length > 0 &&
    counter == allpaths.length - 1
  ) {
    // draw lines
    for (let i = 0; i < kortsteroute.length - 1; i++) {
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(25, 230, 128, 0.75)';
      ctx.beginPath();
      ctx.moveTo(kortsteroute[i].x, kortsteroute[i].y);
      ctx.lineTo(kortsteroute[i + 1].x, kortsteroute[i + 1].y);
      ctx.stroke();
    }
  }

  // draw base
  ctx.drawImage(
    base,
    cvs.width / 2 - basesize / 2 - 2,
    cvs.height - basesize + 1.5,
    basesize,
    basesize
  );

  // draw pins
  for (let i = 1; i < pinx.length - 1; i++) {
    ctx.drawImage(
      pin,
      pinx[i] - pinsize / 2,
      piny[i] - pinsize,
      pinsize,
      pinsize
    );
  }

  // draw text
  ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('pins placed: ' + pincount, 5, 20);
  // if (permutate(pincount) - counter == 1) {
  //   ctx.fillText(
  //     'possible paths: ' + (permutate(pincount) - counter - 1),
  //     5,
  //     40
  //   );
  // } else {
  ctx.fillText(
    'possible shortest paths: ' + (permutate(pincount) - counter),
    5,
    40
  );
  // }
  ctx.fillText('state: ' + state, 5, 60);
  ctx.fillText('pinarray: ' + pinarray.length, 5, 80);
  ctx.fillText('korteroutes: ' + korteroutes, 5, 100);
  if (pincount == 0) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(
      'click up to 6 pins on the map',
      cvs.width / 2,
      cvs.height / 2
    );
  }
  // every frame
  requestAnimationFrame(draw);
}
draw();
