let rainbow = false;

const eraseB = document.querySelector('.erase');
const sizeB = document.querySelector('.size');
const rainbowB = document.querySelector('.rainbow');

eraseB.addEventListener('click', eraseGrid);
sizeB.addEventListener('click', changeSize);

rainbowB.addEventListener('click', () =>{
    rainbow = !rainbow;
});

function generateGrid(gridSize = 16){
    const container = document.querySelector('#grid-container');
    let rows = [];
    for(let i = 1; i <= gridSize; i++){  
        rows[i] = document.createElement(`row${i}`);
        rows[i].classList.add('row');
        container.appendChild(rows[i]);
        for(let j = 1; j <= gridSize; j++){
            const row = document.querySelector(`row${i}`);
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.cssText = `padding: ${255/gridSize}px`;
            cell.addEventListener('mouseover', () => {
                if(rainbow){
                    let x = Math.floor(Math.random() * 256);
                    let y = Math.floor(Math.random() * 256);
                    let z = Math.floor(Math.random() * 256);
                    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
                    cell.style.background = bgColor;
                }
                else{
                    cell.style.background = "black";
                }
            });
            row.appendChild(cell);
        } 
    }
}

function eraseGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.background = "none";
    });
}

function resetGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.remove();
    });
}

function changeSize(){
    let gridSize = prompt('How many rows would you like the new grid to have? (Max 100):');
    resetGrid();
    if(gridSize > 0 && gridSize <= 100){
        generateGrid(gridSize);
    }
    else{
        generateGrid();
    } 
}
generateGrid(16);