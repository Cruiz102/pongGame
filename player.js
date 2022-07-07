class Player{
    constructor(x,y, player_id){
        this.position = createVector(x, y)
        this.speed = 10;
        this.player_id = player_id
        this.vectorCollider = p5.Vector.sub(this.position.copy(), createVector(0, -150)) // this is the vector that will be used to check for collisions 
    }

    show(){
        rect(this.position.x ,this.position.y,-20,150)
        line(this.vectorCollider.x , this.vectorCollider.y, this.position.x , this.position.y)
    }
    moveDown(){
        this.position.y += this.speed;
        this.vectorCollider = p5.Vector.sub(this.position, createVector(0, -150))

    }
    moveUP(){
        this.position.y -= this.speed;
        this.vectorCollider = p5.Vector.sub(this.position, createVector(0, -150))

    }
    move(){
        if (this.player_id == 2){
            if (keyIsDown(UP_ARROW) || Singletons.p2LeftController) {
                this.moveUP()
            }
            if (keyIsDown(DOWN_ARROW) || Singletons.p2RightController) {
                this.moveDown()
            }}

        if(this.player_id == 1){
            if (keyIsDown(87) || Singletons.p1LeftController) {
                this.moveUP()
            }
            if (keyIsDown(83) || Singletons.p1RightController){
                this.moveDown()
            }}

        
        }
    Walls(){
        if(this.position.y <= 0){
            this.position.y =0;
        }
        if(this.position.y >= 570){
            this.position.y = 570;
        }
    }
    

    update(){
        this.move()
        this.Walls()
        rect(this.position.x,this.position.y,20,150)
        line(this.vectorCollider.x , this.vectorCollider.y , this.position.x  , this.position.y)
    }
}