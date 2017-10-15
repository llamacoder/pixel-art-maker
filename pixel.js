document.addEventListener("DOMContentLoaded", function() {

  const PAINT = "paint";
  const ERASE = "erase";
  var gPaintColor = "#ff0000";
  var gEraseColor = "#e0e0e0";
  var gPaintOrErase = PAINT;

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
    gPaintOrErase = PAINT;
  }
  function selectEraser() {
    gPaintOrErase = ERASE;
  }

  function saveArt() {
    alert("Saving...");
  }

  function toggleMusic() {
    alert("Toggling music");
  }

  function changePixelColor(event) {
    let pix = event.target;
    pix.style.backgroundColor = gPaintColor;
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
});
