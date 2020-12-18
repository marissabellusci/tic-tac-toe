let moves = 0;

//module
const gameBoard = (() => {
    'use strict';

    document.querySelectorAll('.cell')
    .forEach(cell => {cell.addEventListener('mouseup', function(event){
        const attack = event.target.value;
        if (moves % 2){
        game(attack,playerFactory().oMarker);
        }
        else game(attack,playerFactory().xMarker)
    })});

    document.getElementById('player-form-button').addEventListener('click',function(e){ 
        playerFactory();
        e.preventDefault();
    });

    document.querySelector('footer').addEventListener('click', function(){
        location.reload()
    });
    

    const boardArray = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    return boardArray;
})();

//fcty function
const game = (pos,y) => {
    'use strict';

    document.getElementById("error-message").textContent = '';
    
    if (gameBoard[pos] == ' '){
    gameBoard.splice(pos, 1, y);
    moves++;
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

            if (moves % 2){
                document.getElementById("second-message").textContent = "O's turn!"
            }

            else document.getElementById("second-message").textContent = "X's turn!";


            console.table(gameBoard);

            //LOGIC TO CHECK IF GAME OVER
                        (function checkGameOver(){
                            if (
                                gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2] && gameBoard[0] !== ' '||
                                gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5] && gameBoard[3] !== ' '||
                                gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8] && gameBoard[6] !== ' '||
                                gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6] && gameBoard[0] !== ' '||
                                gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7] && gameBoard[1] !== ' '||
                                gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8] && gameBoard[2] !== ' '||
                                gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8] && gameBoard[0] !== ' '||
                                gameBoard[2] == gameBoard[4] && gameBoard[4] == gameBoard[6] && gameBoard[2] !== ' '
                            ){
                                alert(`game over!`)
                                document.querySelector('.container').style = "display:none;";
                                document.getElementById("second-message").textContent = `Click reset to play again!`
                                let winner = null;
                                if(moves % 2){winner = 'X'
                                } else {winner='O'};
                                document.getElementById('error-message').textContent = `${winner} Won the Game!` 
                            
                            }

                            else if (gameBoard.includes(' ')==false){
                                alert("Game over. It's a draw!")
                                document.querySelector('.container').style = "display:none;";
                                document.getElementById("second-message").textContent = `Click reset to play again!`
                                document.getElementById('error-message').textContent = `It's a draw!` 
                            }
            
                            else return;
                        })();

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

// fcty function
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
        return {xName, oName, xMarker, oMarker};
};




