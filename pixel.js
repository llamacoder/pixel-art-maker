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

  function setupPaintBarListener() {
    let bar = document.querySelector('.paintRow');
    bar.addEventListener("click", function() {
      changePaintbrushColor(event);
    });
  }

  function changePixelColor(event) {
    let pix = event.target;
    let newBorder = "1 solid " + gPaintColor;
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

  addDivs(2414);
  setUpGridListener();
  setupPaintBarListener();
});
