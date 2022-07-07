window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
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