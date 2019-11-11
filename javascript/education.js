var str1a = 'Scrum';
var str1b = '2019 augustus';
var str1c = 'Proffesional SCRUM Master';
var str2a = 'OCA 1Z0-808';
var str2b = '2019 juni';
var str2c = 'Java oracle certified associate';
var str3a = 'HBO - Biologie en Medisch Labonderzoek';
var str3b = '2014 - 2019';
var str3c = 'Hogeschool Rotterdam';
var str4a = 'HBO - Chemie';
var str4b = '2012 - 2013';
var str4c = 'Hogeschool Rotterdam';
var str5a = 'HBO - Game development';
var str5b = '2010 - 2012';
var str5c = 'Hogeschool voor de Kunsten Utrecht';
var str6a = 'Havo - Natuur en Techniek';
var str6b = '2005 - 2012';
var str6c = 'Comenius college';
var strspeed = 5;
var knotspeed = 8;
var delay = 30;
var linespacing = 18;

function loadeducation() {
  var canv = document.getElementById('canveducation');
  var cont = canv.getContext('2d');

  var nul = 32;
  var str1n = 0,
    str2n = 0,
    str3n = 0,
    str4n = 0,
    str5n = 0,
    str6n = 0;

  function draw() {
    cont.clearRect(0, 0, canv.width, canv.height);

    // lineout
    // cont.beginPath();
    // cont.strokeStyle = 'black';
    // cont.lineWidth = '1';
    // cont.rect(0, 0, canv.width, canv.height);
    // cont.stroke();

    // predraw
    // draw lijn
    cont.lineWidth = 4;
    cont.strokeStyle = '#ddd';
    cont.beginPath();
    cont.moveTo(20, 32 - 7);
    cont.lineTo(20, 431 - 7);
    cont.stroke();
    // draw knots
    for (let i = 0; i < 431 - delay; i += 80) {
      cont.fillStyle = '#ddd';
      cont.beginPath();
      cont.arc(20, 20 + i - 2, 11, 0, 2 * Math.PI);
      cont.fill();
    }

    // draw lijn
    cont.lineWidth = 4;
    cont.strokeStyle = 'rgb(244,177,131)';
    cont.strokeStyle = 'rgb(64, 89, 191)';
    cont.beginPath();
    cont.moveTo(20, 32 - 7);
    cont.lineTo(20, nul - 7);
    cont.stroke();

    // draw knots
    for (let i = 0; i < nul - delay; i += 80) {
      cont.fillStyle = 'rgb(244,177,131)';
      cont.fillStyle = 'rgb(64, 89, 191)';
      cont.beginPath();
      cont.arc(20, 20 + i - 2, 11, 0, 2 * Math.PI);
      cont.fill();
    }

    // draw holes
    // for (let i = 0; i < 431 - delay; i += 80) {
    //   cont.fillStyle = 'white';
    //   cont.beginPath();
    //   cont.arc(20, 20 + i - 2, 4, 0, 2 * Math.PI);
    //   cont.fill();
    // }

    // draw text
    function drawtext(stra, strb, strc, strn, pos) {
      cont.fillStyle = 'rgb(50,50,50)';
      cont.font = 'bold 18px Karla';
      cont.fillText(stra.substring(0, strn), 60, 22 + pos);
      // cont.fillStyle = 'darkgrey';
      cont.font = '18px Karla';
      if (strn > stra.length) {
        cont.fillText(
          strb.substring(0, strn - stra.length),
          60,
          22 + linespacing + pos
        );
      }
      if (strn > stra.length + strb.length) {
        cont.fillText(
          strc.substring(0, strn - stra.length - strb.length),
          60,
          22 + linespacing * 2 + pos
        );
      }
    }

    if (nul > 0 + delay) {
      drawtext(str1a, str1b, str1c, str1n, 0);
      str1n += strspeed;
    }
    if (nul > 80 + delay) {
      drawtext(str2a, str2b, str2c, str2n, 80);
      str2n += strspeed;
    }
    if (nul > 160 + delay) {
      drawtext(str3a, str3b, str3c, str3n, 160);
      str3n += strspeed;
    }
    if (nul > 240 + delay) {
      drawtext(str4a, str4b, str4c, str4n, 240);
      str4n += strspeed;
    }
    if (nul > 320 + delay) {
      drawtext(str5a, str5b, str5c, str5n, 320);
      str5n += strspeed;
    }
    if (nul > 400 + delay) {
      drawtext(str6a, str6b, str6c, str6n, 400);
      str6n += strspeed;
    }

    if (str6n < 140) {
      requestAnimationFrame(draw);
    }
    if (nul < 431) {
      nul += knotspeed;
    }
  }
  draw();
}

// TWEEDE TIJDELIJK
function loadwork() {
  var canv = document.getElementById('canvwork');
  var cont = canv.getContext('2d');

  var nul = 32;
  var str1n = 0,
    str2n = 0,
    str3n = 0,
    str4n = 0,
    str5n = 0,
    str6n = 0;

  function draw() {
    cont.clearRect(0, 0, canv.width, canv.height);

    // predraw
    // draw lijn
    cont.lineWidth = 4;
    cont.strokeStyle = '#ddd';
    cont.beginPath();
    cont.moveTo(20, 32 - 7);
    cont.lineTo(20, 431 - 7);
    cont.stroke();
    // draw knots
    for (let i = 0; i < 431 - delay; i += 80) {
      cont.fillStyle = '#ddd';
      cont.beginPath();
      cont.arc(20, 20 + i - 2, 8, 0, 2 * Math.PI);
      cont.fill();
    }

    // draw lijn
    cont.lineWidth = 4;
    cont.strokeStyle = 'rgb(244,177,131)';
    cont.beginPath();
    cont.moveTo(20, 32 - 7);
    cont.lineTo(20, nul - 7);
    cont.stroke();

    // draw knots
    for (let i = 0; i < nul - delay; i += 80) {
      cont.fillStyle = 'rgb(244,177,131)';
      cont.beginPath();
      cont.arc(20, 20 + i - 2, 12, 0, 2 * Math.PI);
      cont.fill();
    }

    // draw holes
    // for (let i = 0; i < 431 - delay; i += 80) {
    //   cont.fillStyle = 'white';
    //   cont.beginPath();
    //   cont.arc(20, 20 + i - 2, 4, 0, 2 * Math.PI);
    //   cont.fill();
    // }

    // draw text
    function drawtext(stra, strb, strc, strn, pos) {
      cont.fillStyle = 'black';
      cont.font = 'bold 17px Karla';
      cont.fillText(stra.substring(0, strn), 60, 22 + pos);
      cont.fillStyle = 'darkgrey';
      cont.font = '17px Karla';
      if (strn > stra.length) {
        cont.fillText(
          strb.substring(0, strn - stra.length),
          60,
          22 + linespacing + pos
        );
      }
      if (strn > stra.length + strb.length) {
        cont.fillText(
          strc.substring(0, strn - stra.length - strb.length),
          60,
          22 + linespacing * 2 + pos
        );
      }
    }

    if (nul > 0 + delay) {
      drawtext(str1a, str1b, str1c, str1n, 0);
      str1n += strspeed;
    }
    if (nul > 80 + delay) {
      drawtext(str2a, str2b, str2c, str2n, 80);
      str2n += strspeed;
    }
    if (nul > 160 + delay) {
      drawtext(str3a, str3b, str3c, str3n, 160);
      str3n += strspeed;
    }
    if (nul > 240 + delay) {
      drawtext(str4a, str4b, str4c, str4n, 240);
      str4n += strspeed;
    }
    if (nul > 320 + delay) {
      drawtext(str5a, str5b, str5c, str5n, 320);
      str5n += strspeed;
    }
    if (nul > 400 + delay) {
      drawtext(str6a, str6b, str6c, str6n, 400);
      str6n += strspeed;
    }

    if (str6n < 140) {
      requestAnimationFrame(draw);
    }
    if (nul < 431) {
      nul += knotspeed;
    }
  }
  draw();
}
