//snake
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const cell = 20;
const gameSize = 400

let snake = [{ x: cell * 5, y: cell * 5}];

let direction = "right";
let food = generateFood();

let gameScore = 0;
let score = document.getElementById("score");
document.addEventListener("keydown", changeDirection); 

//returns x and y coordinates relative to the size of the grid
//food will get drawn on the draw game function
function generateFood() {
    return {
        x: Math.floor(Math.random() * (gameSize/cell)) * cell,
        y: Math.floor(Math.random() * (gameSize/cell)) * cell,
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
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clear game canvas

    //draw snake
    snake.forEach((segment, i) => {
        if (i === 0) {
            ctx.fillStyle = "lime";
        } else {
            ctx.fillStyle = "green"; //coding assist
        }
        ctx.fillRect(segment.x, segment.y, cell, cell);
    })

    //draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, cell, cell);

    //move snake
    let head = { ...snake[0] };
    // console.log(head);
    console.log(snake);
    // console.log(direction);
    // console.log(head.x);
    if (direction === "left") {
        head.x -= cell;
        // snake.push(head);
    }
    if (direction === "right") {
        head.x += cell;
        // snake.push(head);

    }
    if (direction === "up") {
        head.y -= cell;
        // snake.push(head);

    }
    if (direction === "down") {
        head.y += cell;
        // snake.push(head);

    }

    //collision detection
    if(head.x < 0 || head.y < 0 || head.x > gameSize || head.y > gameSize) {
        clearInterval(game);
        alert("game over!");
        return;
    }


    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        // score += 100;
        gameScore+= 100;
        score.textContent = `score: ${gameScore}`;
        food = generateFood();
    } else {
        snake.pop();
    }

}

//game runs when the page is finished loading
const game = setInterval(drawGame, 100)
// drawGame();s