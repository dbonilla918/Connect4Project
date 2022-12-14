document.addEventListener("DOMContentLoaded", () => {

console.log("The code works, you can go ahead and play if there are no errors!");

let checkWinX = () => {
	if (spaces['box0'] == 'X' && spaces['box1'] == 'X' && spaces['box2'] == 'X') {
		alert("Player " + currentPlayer + " has won the game!");
		gameBoard.classList.add('fade-in-textX');
	} else if (spaces['box3'] == 'X' && spaces['box4'] == 'X' && spaces['box5'] == 'X') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textX');
	} else if (spaces['box6'] == 'X' && spaces['box7'] == 'X' && spaces['box8'] == 'X') {
		alert.set("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textX');
	} else if (spaces['box0'] == 'X' && spaces['box3'] == 'X' && spaces['box6'] == 'X') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textX');
	} else if (spaces['box1'] == 'X' && spaces['box4'] == 'X' && spaces['box7'] == 'X') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textX');
	} else if (spaces['box2'] == 'X' && spaces['box5'] == 'X' && spaces['box8'] == 'X') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textX');
	} else if (spaces['box0'] == 'X' && spaces['box4'] == 'X' && spaces['box8'] == 'X') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textX');
	} else if (spaces['box2'] == 'X' && spaces['box4'] == 'X' && spaces['box6'] == 'X') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textX');
	}
}

let checkWinO = () => {
	if (spaces['box0'] == 'O' && spaces['box1'] == 'O' && spaces['box2'] == 'O') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textO');
	} else if (spaces['box3'] == 'O' && spaces['box4'] == 'O' && spaces['box5'] == 'O') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textO');
	} else if (spaces['box6'] == 'O' && spaces['box7'] == 'O' && spaces['box8'] == 'O') {
		alert("Player " + currentPlayer + " has won the game!")
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textO');
	} else if (spaces['box1'] == 'O' && spaces['box4'] == 'O' && spaces['box7'] == 'O') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textO');
	} else if (spaces['box2'] == 'O' && spaces['box5'] == 'O' && spaces['box8'] == 'O') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textO');
	} else if (spaces['box0'] == 'O' && spaces['box4'] == 'O' && spaces['box8'] == 'O') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textO');
	} else if (spaces['box2'] == 'O' && spaces['box4'] == 'O' && spaces['box6'] == 'O') {
		alert("Player " + currentPlayer + " has won the game!")
		gameBoard.classList.add('fade-in-textO');
	}
}

//Need this array in order for the loop in startGame to work and allow the players to CLICK on the box
let boxes = Array.from(document.getElementsByClassName('box'))
console.log(boxes);


//Constants are way more important than I wouldve ever imagined
//Creates an array with 9 empty spaces which then allows the players to PLACE either an X or a O in there
const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = {}
console.log(spaces);


const startGame = () => {
	//This event handler allows the boxes that are empty to be clicked on and have an X or an O placed in there
	boxes.forEach(box => box.addEventListener('click', boxClicked))
}


//This code is what makes the turn based system work
function boxClicked(e) {
	const id = e.target.id

	if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

		checkWinX()
		checkWinO()

		//Find a way to log the player placing an X or an O in the console
		currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
		console.log("you clicked on a box");

		// console.log(spaces);

		//checkWin()
	}
	console.log(spaces);
}

//The start game Constant has to be called in order for the game to work
startGame()


//This is what makes the game restart when you click on the restart game button
let resetGameFunction = () => {
    console.log("You reset the game, go ahead and play again!")
		document.getElementById('box0').innerText = ' ';
		document.getElementById('box1').innerText = ' ';
		document.getElementById('box2').innerText = ' ';
		document.getElementById('box3').innerText = ' ';
		document.getElementById('box4').innerText = ' ';
		document.getElementById('box5').innerText = ' ';
		document.getElementById('box6').innerText = ' ';
		document.getElementById('box7').innerText = ' ';
		document.getElementById('box8').innerText = ' ';

		spaces = {}
		currentPlayer = X_TEXT

}

let restartGame = document.querySelector(".resetGame")
  restartGame.addEventListener('click', resetGameFunction)


});
