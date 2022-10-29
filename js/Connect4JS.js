document.addEventListener("DOMContentLoaded", () => {

// let grid = { t1:" ", t2: " ", t3: " ", m1: " ", m2: " ", m3: " ", b1: " ", b2: " ", b3: " "}
//
// grid.m2 = "X";

console.log("The code works, you can go ahead and play if there are no errors!");


// This portion of code makes it so that whatver box you click on, it will cycle between an X, O or blank symbol
let clickBox = (e) => {
	console.log("Changed whatever box you clicked on");
    // e.currentTarget.textContent = 'X';
        if (e.currentTarget.textContent === 'X'){
            e.currentTarget.textContent = 'O'
        } else if (e.currentTarget.textContent === 'O') {
            e.currentTarget.textContent = ' ';
        }else {
            e.currentTarget.textContent = 'X';
        }
}
// This closes out the fucntion above



// These repeating strings of code target the box that's clicked to make the symbol change
let changeBox = document.querySelector("#box1")
changeBox.addEventListener('click', clickBox)

let changeBox2 = document.querySelector("#box2")
changeBox2.addEventListener('click', clickBox)

let changeBox3 = document.querySelector("#box3")
changeBox3.addEventListener('click', clickBox)

let changeBox4 = document.querySelector("#box4")
changeBox4.addEventListener('click', clickBox)

let changeBox5 = document.querySelector("#box5")
changeBox5.addEventListener('click', clickBox)

let changeBox6 = document.querySelector("#box6")
changeBox6.addEventListener('click', clickBox)

let changeBox7 = document.querySelector("#box7")
changeBox7.addEventListener('click', clickBox)

let changeBox8 = document.querySelector("#box8")
changeBox8.addEventListener('click', clickBox)

let changeBox9 = document.querySelector("#box9")
changeBox9.addEventListener('click', clickBox)
// This closes out the code above



let resetGameFunction = () => {
    console.log("You reset the game, go ahead and play again!");
    resetBox1 = document.querySelector(".resetGame")
    resetBox1.textContent = " ";
}

let restartGame = document.querySelector(".resetGame")
changeBox.addEventListener('click', resetGameFunction)



});
