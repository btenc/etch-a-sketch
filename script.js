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
            cell.addEventListener('mouseover', () => {
                cell.classList.add('filled');
            });
            row.appendChild(cell);
        } 
    }
}

generateGrid(16);