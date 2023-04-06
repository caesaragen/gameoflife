const numRows = 30;
const numCols = 30;
const cellSize = 20;

let grid = Array(numRows).fill().map(() => Array(numCols).fill(false));
let nextGrid = Array(numRows).fill().map(() => Array(numCols).fill(false));

// set up the initial state of the grid
// grid[1][2] = true;
// grid[2][3] = true;
// grid[3][1] = true;
// grid[3][2] = true;
// grid[3][3] = true;
for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      grid[row][col] = Math.random() < 0.5;
    }
  }
  

function drawGrid() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col]) {
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        }
    }
}

function countNeighbors(row, col) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i === row && j === col) {
                continue;
            }
            if (i >= 0 && i < numRows && j >= 0 && j < numCols && grid[i][j]) {
                count++;
            }
        }
    }
    return count;
}

function updateGrid() {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            let neighbors = countNeighbors(row, col);
            if (grid[row][col]) {
                if (neighbors < 2 || neighbors > 3) {
                    nextGrid[row][col] = false;
                } else {

                    nextGrid[row][col] = true;
                }
            } else {
                if (neighbors === 3) {
                    nextGrid[row][col] = true;
                } else {
                    nextGrid[row][col] = false;
                }
            }
        }
    }
    [grid, nextGrid] = [nextGrid, grid];
}

function animate() {
    updateGrid();
    drawGrid();
    requestAnimationFrame(animate);
}

animate();
