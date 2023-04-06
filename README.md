# Game of Life

This is a JavaScript implementation of Conway's Game of Life using the HTML5 canvas.

Usage
To run the game, simply open the index.html file in a web browser. The game will start automatically and display the initial state of the grid.

The game is set up with a fixed pattern of live cells. To change the initial state of the grid, you can modify the following lines of code in the index.js file:

```js
grid[1][2] = true;
grid[2][3] = true;
grid[3][1] = true;
grid[3][2] = true;
grid[3][3] = true;
```

Alternatively, you can randomly initialize the grid with some live cells using the Math.random() function. For example, you can replace the code above with the following:

```js

for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    grid[row][col] = Math.random() < 0.5;
  }
} 

```

This code initializes each cell in the grid randomly with a 50% chance of being alive or dead. This will create a different initial state of the game each time you run the code, resulting in different patterns of live and dead cells.

**License**
This code is licensed under the MIT License.
