// var txtovermij = [
//   'Mijn naam is Kasper ik ben een junior Java developer voor YoungCapital NEXT momenteel op zoek naar',
//   ' een opdracht. Ik ben <a class="gif">afgestudeerd</a> in Biologie en Medisch Labonderzoek ik vond dit een leuke en ',
//   ' interessante studie maar mijn passie ligt toch in het programmeren. Ik vind het leuk om te puzzelen ',
//   'en na te denken met code en te leren over verschillende technieken en ontwikkelingen zoals machine ',
//   'learning en algoritmes. Ook vindt ik het leuk om met eigen projectjes bezig te zijn, waarvan er spoedig ',
//   ' meer op deze site komen.'
// ];
// var txtovermij = [
//   "Welkom op mijn portfoliosite! Hier kun allerlei informatie over mij vinden en ook ben ik van plan hier al mijn programmeerprojecten te plaatsen. In mijn vrije tijd ben ik graag bezig met programmeren en sport, voornamelijk fitness en boulderen (klimmuren van 4 meter). Mijn interesse in programmeren begon al vroeg met game development. Ik heb toen zowel zelfstandig als met vrienden gewerkt aan een aantal hobby projecten, waaronder een puzzel app voor de mobiel. Ik ben uiteindelijk afgestudeerd in Biologie en Medisch Labonderzoek omdat ik de werking van medicijnen en biologische processen in de mens super interessant vind. Ik miste echter het programmeren en wilde me er meer in verdiepen. Ik heb me toen via YoungCapital NEXT laten omscholen tot Junior Java Developer. Sindsdien ben ik weer volop bezig om meer te leren op het gebied van programmeren. Onderwerpen waar ik op dit moment bezig ben om meer van te leren zijn algoritmes visualisaties, Machine Learning en verbindingen tussen verschillende systemen."
// ];
// var txtovermij = [
//   'Welkom op mijn portfolio site! Hier kun allerlei informatie over mij vinden en ook ben ik van plan hier al mijn',
//   '<a class="gif">programmeerprojecten</a> te plaatsen. Mijn interesse in programmeren begon al vroeg met <a class="gif">game development</a>.',
//   'Ik ben uiteindelijk afgestudeerd in <a class="gif">Biologie en Medisch Labonderzoek</a> omdat ik de werking van medicijnen',
//   'en biologische processen in de mens super interessant vind. Ik miste echter het programmeren en wilde me',
//   'er meer in verdiepen. Ik heb me toen via <a class="">YoungCapital NEXT</a> laten omscholen tot Junior Java Developer.',
//   'Sindsdien ben ik weer volop bezig om meer te leren op het gebied van programmeren. Onderwerpen waar ik',
//   'op dit moment bezig ben om meer van te leren zijn <a class="">algoritme visualisaties</a>, <a class="">Machine Learning</a> en',
//   '<a class="">verbindingen tussen verschillende systemen</a>.'
// ];
var txtovermij = [
  "Welkom op mijn portfoliosite! Hier kun je allerlei informatie over mij vinden en ook ben ik van plan hier al",
  'mijn <a class="gif">programmeerprojecten</a> te plaatsen. In mijn vrije tijd ben ik graag bezig met programmeren en sport,',
  'voornamelijk <a class="gif">fitness</a> en <a class="gif">boulderen</a> (klimmuren van 4 meter). Mijn interesse in programmeren begon al vroeg',
  'met <a class="gif">game development</a>. Ik heb toen zowel zelfstandig als met vrienden gewerkt aan een aantal hobby',
  'projecten, waaronder een puzzel app voor de mobiel. Ik ben uiteindelijk afgestudeerd in <a class="gif">Biologie en Medisch</a>',
  '<a class="gif">Labonderzoek</a> omdat ik de werking van medicijnen en biologische processen in de mens super interessant',
  "vind. Ik miste echter het programmeren en wilde me er meer in verdiepen. Ik heb me toen via YoungCapital",
  "NEXT laten omscholen tot Junior Java Developer. Sindsdien ben ik weer volop bezig om meer te leren op het",
  "gebied van programmeren. Onderwerpen waar ik op dit moment bezig ben om meer van te leren zijn",
  "algoritmes visualisaties, Machine Learning en verbindingen tussen verschillende systemen."
];
var txthobbys = [
  '<b>Sport:</b> <a class="gif">Fitness</a> / <a class="gif">Boulderen</a>',
  '<b>Film:</b> <a class="gif">No Country for Old Men</a>',
  '<b>Series:</b> <a class="gif">Twin Peaks</a> / <a class="gif">The Office</a>',
  '<b>Game:</b> <a class="gif">TLOZ: Ocarina of Time</a>',
  '<b>Eten:</b> <a class="gif">Hamburger</a>',
  '<b>Drinken:</b> <a class="gif">Koffie</a>'
  // '<b>Intresses:</b> Machine Learning, Algoritme Visualisaties en Game Development'
];
var block = "";
// ("<i class='fas fa-square' style='font-size:22px;color:rgba(64, 89, 191, 0.5)'></i>");
var done;
var nxt;

function loadaboutall() {
  done = false;
  nxt = 0;
  clearall(["povermij", "phobbys"]);
  loadabout("povermij", txtovermij, 80, 200);
}

function clearall(elements) {
  for (let i = 0; i < elements.length; i++) {
    var canv = document.getElementById(elements[i]);
    canv.innerHTML = "";
  }
}

function next(i) {
  switch (i) {
    case 1:
      loadabout("phobbys", txthobbys, 60, 200);
      break;
    // // case 2:
    // loadabout('povermij', txtovermij, 2, 20);
    // break;
    // // case 3:
    // loadabout('phobbys', txthobbys, 2, 20);
    // break;
    default:
      done = true;
      initgifs();
      break;
  }
}

function loadabout(element, text, speed, delay) {
  var canv = document.getElementById(element);
  var nul = 0;
  function draw() {
    canv.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      if (nul - delay * i <= text[i].length) {
        canv.innerHTML +=
          text[i].substring(0, nul - delay * i) + block + "<br/>";
      } else {
        canv.innerHTML += text[i] + "<br/>";
      }
    }

    // check als allemaal klaar zijn
    var complete = 0;
    for (let i = 0; i < text.length; i++) {
      if (nul - delay * i > text[i].length) {
        complete++;
      }
    }
    if (complete < text.length) {
      nul += speed;
      requestAnimationFrame(draw);
    } else if (!done) {
      nxt++;
      next(nxt);
    }
  }
  draw();
}

// // oud
// var txtovermij =
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnameum odit
// quas repellendus ea! Suscipit provea labore iure perspiciatis ipsam tenetur
// quas officiis. Aliaslaudantium sit a ex facilis!';

// function loadabout(element, text, speed) {
//   var canv = document.getElementById(element);
//   var nul = 0;
//   function draw() {
//     canv.innerHTML = '';
//     if (nul <= text.length) {
//       canv.innerHTML = text.substring(0, nul) + block;
//       nul += speed;
//       requestAnimationFrame(draw);
//     } else {
//       canv.innerHTML = text;
//     }
//   }
//   draw();
// }
