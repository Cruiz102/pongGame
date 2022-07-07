

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
    this.Controllers(this.player1, this.player2)
    this.ui.Menu()
    this.player1.show()
    this.player2.show()
    this.ball.show()

  }

  Controllers(p1,p2){
    this.p1Left = createButton("<h1><<h1>").id("P1Controller")
    this.p1Right = createButton("<h1>><h1>").id("P1Controller")
    this.p2Left = createButton("<h1><<h1>").id("P2Controller")
    this.p2Right = createButton("<h1>><h1>").id("P2Controller")
      this.p1Left.mousePressed(() =>{Singletons.p1LeftController = true})
      this.p1Right.mousePressed(() =>{Singletons.p1RightController = true})
      this.p2Left.mousePressed(() =>{Singletons.p2LeftController = true})
      this.p2Right.mousePressed(() =>{Singletons.p2RightController = true})

      this.p2Left.mouseReleased(() =>{Singletons.p2LeftController = false})
      this.p2Right.mouseReleased(() =>{Singletons.p2RightController = false})
      this.p1Left.mouseReleased(() =>{Singletons.p1LeftController = false})
      this.p1Right.mouseReleased(() =>{Singletons.p1RightController = false})


  }

  startGame(){
    Singletons.startGame = true;
    this.menu = document.getElementById("menu")
    this.menu.style.visibility = "hidden";
  
  
  }
    
   
  keyHandler(){
    if( keyCode === ENTER){
      this.startGame()
    }

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
