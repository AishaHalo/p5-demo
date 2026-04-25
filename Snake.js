
const directionInitial = 'r';



const cellSize = 25;

const snakeHead = {
    image: null,
    positionX: 50 ,
    positionY: 50 ,
    sizeX: 50,
    sizeY:  50,

};

let direction = directionInitial;

function drawHead(){
    image(
        snakeHead.image,
        snakeHead.positionX,
        snakeHead.positionY,
        snakeHead.sizeY,
        snakeHead.sizeX
    )
}



function drawGrid(){
        for(var x = 0; x < canvasX; x = x + cellSize){
            line(x, 0, x, canvasY)
        }
        for(var y = 0; y < canvasY; y = y + cellSize){
            line(0, y, canvasX, y)
        }

}


function drawSnake() {
    drawGrid();

    if (direction === 'r') {
        snakeHead.positionX += cellSize;

    }

else if (direction === 'l') {
        snakeHead.positionX -= cellSize;
    }
else if (direction === 'u') {
        snakeHead.positionY -= cellSize;
    }
else if (direction === 'd') {
        snakeHead.positionY += cellSize;
    }


    drawHead();

}


function keyPressedSnake(){
    if (key === 'ArrowLeft'  && direction !== 'r') {
        direction = 'l'

    }
    else if (key === 'ArrowRight'  && direction !== 'l') {
        direction = 'r'

    }
    else if (key === 'ArrowUp'  && direction !== 'd') {
        direction = 'u'

    }
    else if (key === 'ArrowDown'  && direction !== 'u') {
        direction = 'd'

    }
}

function setupSnake() {

    snakeHead.image= loadImage('Assest/Snake.png')
    

}
