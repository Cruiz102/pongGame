 class UI  {
     constructor(){
         this.menu = createDiv()
         this.title =  createElement("h1",'<h2>Pong Game<h2>');
         this.startButtom = createButton("start")
         this.startButtom.class("startButtom")
         this.scoreLeft = createElement("h1" ,"0")
         this.scoreRight = createElement("h1", "0")
         this.title.parent(this.menu)
         this.startButtom.parent(this.menu);
        this.startButtom.mousePressed(this.closeUI)

        this.menu.id("menu");
        this.scoreLeft.id("scoreLeft")
        this.scoreRight.id("scoreRight")
        
        this.hue_rotate_value = 1;
   

    
     }
     MenuAnimation(){
         if(this.hue_rotate_value ==360)
            this.hue_rotate_value = 1;
         this.hue_rotate_value++
         this.startButtom.style("filter", 'hue-rotate('+this.hue_rotate_value+'deg)')
     }
  
    Menu(){
        this.menu.position(1280/ 2, 720/ 2)
        this.title.style('text-align:center')
        this.startButtom.parent(this.title);

     

  }
  closeUI(){
      this.menu = document.getElementById("menu")
      console.log(this.menu)
      this.menu.style.visibility = "hidden";
   
      
  }

  


}






