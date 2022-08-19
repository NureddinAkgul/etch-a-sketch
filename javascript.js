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

sizeClass = {'small': 'small-grid', 'medium': 'medium-grid-default', 'big': 'big-grid'};

generateGrid();



function changeColor(block) {
    const blocks = document.querySelectorAll('#grid-container > div');
    blocks.forEach(function(block) {
        block.addEventListener('mouseenter', (e) => {
            e.target.classList.add('change-color');
        })
    });
}


const sizeButtons = document.querySelectorAll('#size > button');

function changeSize(button) {
    button.addEventListener('click', function(e) {
        let size = e.target.id.toString();
        generateGrid(eval(size), sizeClass[size]);
        changeColor();
    });
}

sizeButtons.forEach(changeSize);
changeColor();