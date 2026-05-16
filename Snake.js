
const directionInitial = 'r';
const tail = [];



const cellSize = 25;

const snakeHead = {
    direction: null,
    image: null,
    cellX: null ,
    cellY: null ,
    sizeX: cellSize,
    sizeY:  cellSize

};

const snakeTailSegment = {
    image: null,
    sizeX: cellSize,
    sizeY: cellSize
}





const food = {
    image: null,
    cellX: null,
    cellY: null,
    sizeX: cellSize,
    sizeY: cellSize
}





function drawHead(){
    angleMode(DEGREES)
    push();
translate(cellSize * snakeHead.cellX + cellSize / 2,
        cellSize * snakeHead.cellY + cellSize / 2);

if (snakeHead.direction === 'r') {
        rotate(-90);
    }
else if (snakeHead.direction === 'l') {
        rotate(90);
    }
else if (snakeHead.direction === 'u') {
        rotate(180);
    }
    imageMode(CENTER)
    image(
        snakeHead.image,
        0,
        0,
        snakeHead.sizeY,
        snakeHead.sizeX
    )
    pop()
    angleMode(RADIANS)
}



function drawTail() {
    let index = 0;
     while (index <= tail.length - 2) {
        tail[index].cellX = tail[index + 1].cellX;
        tail[index].cellY = tail[index + 1].cellY;

     }
     tail[tail.length - 1].cellX =  snakeHead.cellX;
     tail[tail.length - 1].cellY =  snakeHead.cellY;

     tail.forEach((segment) => {
        image(
            snakeTailSegment.image,
            segment.cellX * cellSize,
            segment.cellY * cellSize,
            snakeTailSegment.sizeX,
            snakeTailSegment.sizeY
        )
     })

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

    
    image(
        food.image,
        cellSize *food.cellX,
        cellSize *food.cellY,
        food.sizeY,
        food.sizeX
    );


      drawTail();

    

    if (snakeHead.direction === 'r') {
        snakeHead.cellX += 1;

    }

else if (snakeHead.direction === 'l') {
        snakeHead.cellX -= 1;
    }
else if (snakeHead.direction === 'u') {
        snakeHead.cellY -= 1;
    }
else if (snakeHead.direction === 'd') {
        snakeHead.cellY += 1;
    }

    if (snakeHead.cellX === food.cellX && snakeHead.cellY === food.cellY) {
    food.cellX = getRandomFoodPosition().x;
    food.cellY = getRandomFoodPosition().y;

    
    tail.unshift({
        cellX: tail[0].cellX,
        cellY: tail[0].cellY
    })


    }


    drawHead();


}


function keyPressedSnake(){
    if (key === 'ArrowLeft'  && snakeHead.direction !== 'r') {
        snakeHead.direction = 'l'

    }
    else if (key === 'ArrowRight'  && snakeHead.direction !== 'l') {
        snakeHead.direction = 'r'

    }
    else if (key === 'ArrowUp'  && snakeHead.direction !== 'd') {
        snakeHead.direction = 'u'

    }
    else if (key === 'ArrowDown'  && snakeHead.direction !== 'u') {
        snakeHead.direction = 'd'

    }

     
}

    function getRandomFoodPosition () {
        const countCellX = canvasX / cellSize;
        const countCellY = canvasY / cellSize;

        return {
            x: Math.floor(Math.random() * countCellX),
            y: Math.floor(Math.random() * countCellY)
        }
    }

function setupSnake() {
    food.image = loadImage('Assest/FOOD.webp')
    '
    '
    snakeHead.image = loadImage('Assest/Snake.png')
    snakeHead.direction = directionInitial;
    snakeHead.cellX = 2;
    snakeHead.cellY = 2;

    snakeTailSegment.image = loadImage('Assets'/'Body.wepb');
    tail.length = 0 ;
    tail.push({cellX: null,
        cellY: null
    });
}
