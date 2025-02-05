//snake
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const cell = 20;
const gameSize = 400

let snake = [{ x: cell * 5, y: cell * 5}];

let direction = "right";
let food //this will equal to the generate food function 
let score = 0;

document.addEventListener("keydown", changeDirection); 

//returns x and y coordinates relative to the size of the grid
//food will get drawn on the draw game function
function generateFood() {
    return {
        x: Math.floor(Math.random() * (gameSize/cell)),
        y: Math.floor(Math.random() * (gameSize/cell)),
    }
}

//function to determine direction states based on key pressed
function changeDirection(e) {
    const key = e.code;
    if (key === "KeyW") {
        direction = "up";
    } else if (key === "KeyS") {
        direction = "down";
    } else if (key === "KeyA") {
        direction = "left";
    } else if (key === "KeyD") {
        direction = "right";
    }
    // console.log(key);
    // console.log(direction);
}


function drawGame() {

}