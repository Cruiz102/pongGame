
let game;
function setup(){
    game = new Game()
    game.initGame()

}

function draw(){
    game.gameLoop()
}

function keyPressed(){
    game.keyHandler()

}