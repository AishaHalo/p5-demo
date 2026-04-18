
const cellSize = 25;
const snakeHead = {
    image: null,
    positionX: 50 ,
    positionY: 50 ,
    sizeX: 25,
    sizY:  25,

};


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

    drawHead();

}


function setupSnake() {

    snakeHead.image= loadImage('Assest/Snake.png')
    

}
