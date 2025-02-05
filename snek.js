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

function generateFood() {
    return {
        x: Math.floor(Math.random() * (gameSize/cell)),
        y: Math.floor(Math.random() * (gameSize/cell)),
    }
}
function drawGame() {

}
function changeDirection(e) {
    const key = e.code;
    if (key === "KeyD")
}