

class Game{
  constructor() {
    this.height = 720;
    this.width = 1280;
    this.background_color = color(64, 64, 64);
    this.ui = new UI()
    this.player1 = new Player(20,300, 1)
    this.player2 = new Player(1240,100,2)
    this.ball = new Ball()
    this.gameLogic = new GameLogic(this.ui)
    //connect startbutton to its logic.
    this.ui.startButtom.mousePressed(this.startGame)


  }

  initGame(){
    createCanvas(this.width, this.height);
    background(this.background_color)
    this.ui.Menu()
    this.player1.show()
    this.player2.show()
    this.ball.show()

  }

  startGame(){
    Singletons.startGame = true;
    this.menu = document.getElementById("menu")
    this.menu.style.visibility = "hidden";
  
  }
    
   
  keyHandler(){

     }

  
    
  
   gameLoop(){
       this.ui.MenuAnimation()
       background(this.background_color);
       this.ball.update()
       this.player1.update()
       this.player2.update()
       this.gameLogic.update(this.player1,this.ball,this.player2)
         
     
   }




   

   
}
