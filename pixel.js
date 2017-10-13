document.addEventListener("DOMContentLoaded", function() {
  function makeDiv() {
    let div = document.createElement('div');
    div.className = 'gridSquare';
    div.style.backgroundColor = "#ffffff";
    return div;
  }

  function addDivs(num) {
    let grid = document.querySelector('.grid');
    // let rowDiv = document.
    for (let i = 0; i < num; i++) {
      grid.appendChild(makeDiv());
    }
  }

  addDivs(64);
  addDivs(64);
});
