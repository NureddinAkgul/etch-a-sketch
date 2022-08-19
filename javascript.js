function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {
  const gridContainer = document.getElementById('grid-container');
  
  gridContainer.innerHTML = '';
  
  gridContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
  gridContainer.classList.add(cssClass);
  
  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
  }
}

const small = 16 * 22;
const medium = 32 * 44;
const big = 64 * 88;
generateGrid();

let blocks = document.querySelectorAll('#grid-container > div');

function changeColor(block) {
    block.addEventListener("mouseenter", (e) => {
        // highlight the mouseenter target
        e.target.classList.add('change-color');
    });
}

blocks.forEach(changeColor);