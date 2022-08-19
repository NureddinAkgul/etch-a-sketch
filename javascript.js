function generateGrid(size = 32 * 32, cssClass = 'medium-grid-default') {
  const gridContainer = document.getElementById('grid-container');
  
  gridContainer.innerHTML = '';
  
  gridContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
  gridContainer.classList.add(cssClass);
  
  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
  }
}

const small = 16 * 16;
const medium = 32 * 32;
const big = 64 * 64;

sizeClass = {'small': 'small-grid', 'medium': 'medium-grid-default', 'big': 'big-grid'};

generateGrid();



function changeColor(block) {
    const blocks = document.querySelectorAll('#grid-container > div');
    blocks.forEach(function(block) {
        block.addEventListener('mouseenter', function(e) {
            isRainbow ? e.target.style.backgroundColor = generateRandomColor() : e.target.classList.add('change-color')})
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

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

const rainbow = document.querySelector('#rainbow');
let isRainbow = false;
rainbow.addEventListener('click', () => isRainbow = !isRainbow);

sizeButtons.forEach(changeSize);
changeColor();