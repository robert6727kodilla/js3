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
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
    computerMove = 'kamień';
}
    else if(randomNumber == 2){
    computerMove = 'papier';
}
    else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/
//printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
/*
if(playerInput == '1'){
    playerMove = 'kamień';
}
    else if(playerInput == '2'){
        playerMove = 'papier';
}
    else if(playerInput == '3'){
        playerMove = 'nożyce';
}
*/
//printMessage('Twój ruch to: ' + playerMove);


//kamień 
if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('remis!');
}
    else if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
}
    else if( computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('przegrywasz!');
}
//papier
    else if( computerMove == 'papier' && playerMove == 'papier'){
        printMessage('remis!');
}
    else if( computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
}
    else if( computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('przegrywasz!');
}

//nożyce
    else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
        printMessage('remis!');
}
    else if( computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('przegrywasz!');
}
    else if( computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
}
//inne przypadki
    else {
        printMessage('przypadek nie osługiwany');
}

function displayResult(argComputerMove, argPlayerMove){
	printMessage("komp: " + argComputerMove);
    printMessage("gracz: " + argPlayerMove);
}
displayResult(computerMove, playerMove);