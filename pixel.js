document.addEventListener("DOMContentLoaded", function() {

  const PAINT = "paint";
  const ERASE = "erase";
  var gPaintColor = "#ff0000";
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
      } else if (event.target.className.search("paintBox") !== -1) {
        selectPaintbrush();
      } else if (event.target.className.search("eraseBox") !== -1) {
        selectEraser();
      } else if (event.target.className.search("saveBox") !== -1) {
        saveArt();
      } else if (event.target.className.search("musicBox") !== -1) {
        toggleMusic();
      }
    });
  }

  function selectPaintbrush() {
    alert("Selecting paintbrush");
  }
  function selectEraser() {
    alert("Selecting eraser");
  }
  function saveArt() {
    alert("Saving...");
  }
  function toggleMusic() {
    alert("Toggling music");
  }

  function changePixelColor(event) {
    let pix = event.target;
    let newBorder = "1 solid " + gPaintColor;
    // let paintBox = document.getELementById("paintBox");
    pix.style.backgroundColor = gPaintColor;
    pix.style.border = newBorder;
  }

  function changePaintbrushColor(event) {
    let pix = event.target;
    gPaintColor = pix.style.backgroundColor;
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
