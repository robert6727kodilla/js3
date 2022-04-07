{
const playGame = function(playerInput){
    clearMessages()
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
        if(argMoveId == 2){
        return 'papier';
        }
        if(argMoveId == 3){
        return 'nożyce';
        }
    }

    const displayResult = function (argComputerMove, argPlayerMove){
        printMessage("komp: " + argComputerMove);
        printMessage("gracz: " + argPlayerMove);
        

        if(
            (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
            (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || 
            (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
        ) {
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == argPlayerMove) {
            printMessage('remis!');
        } else {
            printMessage('Przegrywasz!');
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);

}
document.getElementById('play-rock').addEventListener('click', function(){
    printMessage(playGame(1));
});
document.getElementById('play-paper').addEventListener('click', function(){
    printMessage(playGame(2));
});
document.getElementById('play-scissors').addEventListener('click', function(){
    printMessage(playGame(3));
});

}