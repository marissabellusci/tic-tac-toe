//module
const gameBoard = (() => {
    'use strict';


    document.querySelectorAll('.cell')
    .forEach(cell => {cell.addEventListener('mouseup', function(event){
        const attack = event.target.value;
        game(attack,playerFactory().oMarker);
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

            //cursor style
            document.querySelectorAll('.cell')
            .forEach(cell => {cell.addEventListener('mouseover', function(event){
                if (event.target.textContent != ' '){
                    document.querySelector(`#cell-${event.target.value}`).style.cursor = 'not-allowed';
                }
        
                if (event.target.textContent == ' '){
                    document.querySelector(`#cell-${event.target.value}`).style.cursor = 'pointer';
                    
                }
            })});

            })();



    return gameBoard;

};
const playerFactory = () => {

    let markerX = "x";
    let nameX = document.getElementById('player-form').playerXname.value;

    let markerO = "O";
    let nameO = document.getElementById('player-form').playerOname.value;

    const Player = (name,marker) => {
        const getName = () => name.toUpperCase();
            const getMarker = () => marker.toUpperCase();
            return {getName, getMarker};
        };

        const playerX = Player(nameX, markerX);
        const playerO = Player(nameO, markerO);
        
        console.log(`${playerX.getName()} vs ${playerO.getName()}`);
        document.querySelector('h2').textContent = `${playerX.getName()} (X) vs ${playerO.getName()} (O)`;

        const xMarker = playerX.getMarker();
        const oMarker = playerO.getMarker();
        const xName = playerX.getName();
        const oName = playerX.getName();

        console.log({playerX, playerO, xName, oName, xMarker, oMarker})
        document.querySelector('#player-form').style = "display:none";
        document.getElementById('error-message').textContent = `${playerX.getName()} goes first!`
        return {playerX, playerO, xName, oName, xMarker, oMarker};
};


document.getElementById('player-form-button').addEventListener('click',function(e){
    
    playerFactory();
    e.preventDefault();
});


