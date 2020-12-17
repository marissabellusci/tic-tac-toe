const gameBoard = (() => {
    'use strict';

    const boardArray = ['x','O','x','O','x','O','x','O','x'];
    console.table(boardArray);
    return boardArray;
})();

const displayController = (() => {
    'use strict';
    console.log('display controls go here!')

})();

document.getElementById('cell-0').textContent = gameBoard[0];
document.getElementById('cell-1').textContent = gameBoard[1];
document.getElementById('cell-2').textContent = gameBoard[2];
document.getElementById('cell-3').textContent = gameBoard[3];
document.getElementById('cell-4').textContent = gameBoard[4];
document.getElementById('cell-5').textContent = gameBoard[5];
document.getElementById('cell-6').textContent = gameBoard[6];
document.getElementById('cell-7').textContent = gameBoard[7];
document.getElementById('cell-8').textContent = gameBoard[8];