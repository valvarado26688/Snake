//canvas notes

// get context is a method called on <canvas> to retrieve 2d rendering context. this also implies 3d is possible
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d"); //ctx just stands for context; variable provides methods and properties to draw

const gridSize = 20;

//array of objects, every object is a "part" of the snake
let snake = [{ x: 200, y: 200}];
let food = { x: 100, y: 100 };

let dx = gridSize;
let dy = 0;

let score = 0;
let gameRunning = true;

//functions
function drawRect(color, x, y) { //not sure how this works yet 
    ctx.fillStyle = color;
    ctx.fillRect(x, y, gridSize, gridSize);
}

function drawSnake() {
    snake.forEach((e) => drawRect("lime", e.x, e.y));
}

function drawFood() {
    drawRect("red", food.x, food.y);
}
//=====================

//movement
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy}; //woah

    if (head.x === food.x && head.y === food.y) {
        score++;
        placeFood();
    } else {
        snake.pop();
    }
}

function placeFood() {
    food.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
    food.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
}
//===================================

//event listeners

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (dy === 0) {
                dx = 0;
                dy = -gridSize;
            } 
            break;
        case "ArrowDown":
            if (dy === 0) {
                dx = 0;
                dy = gridSize;
            } 
            break;
        case "ArrowLeft":
            if (dx === 0) { dx = -gridSize; 
                dy = 0; 
            }
            break;
        case "ArrowRight":
            if (dx === 0) { dx = gridSize; 
                dy = 0; 
            }
            break;
    }
})
//===================================

//game loop
function gameLoop() {
    if (!gameRunning) return;

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        moveSnake();
        drawSnake();
        drawFood();
        checkCollision(); //check on this

        requestAnimationFrame(gameLoop);
    }, 100);
}
//=====================================
//collisions function

function checkCollision() {
    const head = snake[0];
    console.log(head);
    console.log(snake);

    if(head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
        gameRunning = false;
        alert("game over")
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake [i].x && head.y === snake[i].y) {
            gameRunning = false;
            alert("game over");
        }
    }
}

placeFood();
gameLoop();