//module
const gameBoard = (() => {
    'use strict';

    const boardArray = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    console.table(boardArray);
    return boardArray;
})();

//fcty function
const displayController = (pos,y) => {
    'use strict';

    document.getElementById("error-message").textContent = '';
    
    if (gameBoard[pos] == ' '){
    gameBoard.splice(pos, 1, y);
    console.log(gameBoard[pos]);
    }
    else {
    document.getElementById("error-message").textContent = "There's already something in that spot!";
    return console.log("There's already something in that spot!");
    }

    //RENDERS EVERYTHING TO THE DOM//
        function refreshPage(){
            document.getElementById('cell-0').textContent = gameBoard[0];
            document.getElementById('cell-1').textContent = gameBoard[1];
            document.getElementById('cell-2').textContent = gameBoard[2];
            document.getElementById('cell-3').textContent = gameBoard[3];
            document.getElementById('cell-4').textContent = gameBoard[4];
            document.getElementById('cell-5').textContent = gameBoard[5];
            document.getElementById('cell-6').textContent = gameBoard[6];
            document.getElementById('cell-7').textContent = gameBoard[7];
            document.getElementById('cell-8').textContent = gameBoard[8];
            };

    refreshPage();

    //LISTENS FOR CLICKS//

    return gameBoard;

};





