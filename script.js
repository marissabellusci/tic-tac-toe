//module
const gameBoard = (() => {
    'use strict';

    document.querySelectorAll('.cell')
    .forEach(cell => {cell.addEventListener('mouseup', function(event){
        const attack = event.target.value;
        game(attack,'x');
    })});

    const boardArray = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

    return boardArray;
})();

//fcty function
const game = (pos,y) => {
    'use strict';

    document.getElementById("error-message").textContent = '';
    
    if (gameBoard[pos] == ' '){
    gameBoard.splice(pos, 1, y);
    }

    else {
    document.getElementById("error-message").textContent = "There's already something in that spot!";
    }

    //RENDERS EVERYTHING TO THE DOM//
        (function refreshPage(){
            document.getElementById('cell-1').textContent = gameBoard[1];
            document.getElementById('cell-2').textContent = gameBoard[2];
            document.getElementById('cell-0').textContent = gameBoard[0];
            document.getElementById('cell-3').textContent = gameBoard[3];
            document.getElementById('cell-4').textContent = gameBoard[4];
            document.getElementById('cell-5').textContent = gameBoard[5];
            document.getElementById('cell-6').textContent = gameBoard[6];
            document.getElementById('cell-7').textContent = gameBoard[7];
            document.getElementById('cell-8').textContent = gameBoard[8];

            console.table(gameBoard);
            })();



    return gameBoard;

};

const player = (() => {
    return console.log('new player!')
});





