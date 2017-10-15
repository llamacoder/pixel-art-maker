document.addEventListener("DOMContentLoaded", function() {

  const PAINT = "paint";
  const ERASE = "erase";
  var gPaintColor = "#ff0000";
  var gEraseColor = "#ddd";
  var gPaintOrErase = PAINT;

function addMusic() {
  // add some music!
  let myAudio = document.createElement('audio');
  let myBody = document.querySelector("body");
  myAudio.autoplay = false;
  myAudio.loop = true;
  myAudio.src = "./audio/02.mp3"
  myAudio.controls = false;
  myBody.appendChild(myAudio);
}

  function setUpGridListener() {
    let grid = document.querySelector('.grid');
    grid.addEventListener("click", function() {
      changePixelColor(event);
    });
  }

  function setupPaintBarListeners() {
    let bars = document.querySelectorAll('.paintRow');
    bars[0].addEventListener("click", function() {
      changePaintbrushColor(event);
    });
    bars[1].addEventListener("click", function() {
      if (event.target.className.search("paintChip") !== -1) {
        changePaintbrushColor(event);
      } else if (event.target.id === "paintBox") {
        selectPaintbrush();
      } else if (event.target.id === "eraseBox") {
        selectEraser();
      } else if (event.target.id === "saveBox") {
        saveArt();
      } else if (event.target.id === "musicBox") {
        toggleMusic();
      }
    });
  }

  function selectPaintbrush() {
    let box = document.querySelector("#paintBox");
    box.className = box.className + " selected";
    gPaintOrErase = PAINT;
    unselectEraser();
  }
  function unselectPaintbrush() {
    let box = document.querySelector("#paintBox");
    box.classList.remove("selected");
  }
  function selectEraser() {
    let box = document.querySelector("#eraseBox");
    box.className = box.className + " selected";
    gPaintOrErase = ERASE;
    unselectPaintbrush();
  }
  function unselectEraser() {
    let box = document.querySelector("#eraseBox");
    box.classList.remove("selected");
  }

  function saveArt() {
    alert("Saving...");
  }

  function toggleMusic() {
    let song = document.querySelector("audio");
    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }

  function changePixelColor(event) {
    let pix = event.target;
    if (gPaintOrErase === PAINT) {
      pix.style.backgroundColor = gPaintColor;
    } else {
      pix.style.backgroundColor = gEraseColor;
    }
  }

  function changePaintbrushColor(event) {
    let pix = event.target;
    let currentBox = document.getElementById("currentColorBox");
    gPaintColor = pix.style.backgroundColor;
    currentBox.style.backgroundColor = gPaintColor;
  }

  function getPaintColor() {
    return "#ff0000";
  }

  function makeDiv() {
    let div = document.createElement('div');
    div.className = 'pixelSquare';
    return div;
  }

  function addDivs(num) {
    let grid = document.querySelector('.grid');
    for (let i = 0; i < num; i++) {
      grid.appendChild(makeDiv());
    }
  }

  addDivs(660);
  setUpGridListener();
  setupPaintBarListeners();
  addMusic();
});
