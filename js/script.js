function playGame(playerInput){
    clearMessages()
    function getMoveName(argMoveId){
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

    function displayResult(argComputerMove, argPlayerMove){
        printMessage("komp: " + argComputerMove);
        printMessage("gracz: " + argPlayerMove);
        //kamień 

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

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let playerMove = getMoveName(playerInput);

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