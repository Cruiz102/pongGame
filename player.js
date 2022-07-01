class Player{
    constructor(x,y, player_id){
        this.position = createVector(x, y)
        this.speed = 7;
        this.player_id = player_id
        this.vectorCollider = p5.Vector.sub(this.position.copy(), createVector(0, -150)) // this is the vector that will be used to check for collisions 
    }

    show(){
        rect(this.position.x ,this.position.y,-20,150)
        line(this.vectorCollider.x , this.vectorCollider.y, this.position.x , this.position.y)
    }
    move(){
        if (this.player_id == 2){
            if (keyIsDown(UP_ARROW)) {
                this.position.y -= this.speed;
                this.vectorCollider = p5.Vector.sub(this.position.copy(), createVector(0, -150))
            }
            if (keyIsDown(DOWN_ARROW)){
                this.position.y += this.speed;
                this.vectorCollider = p5.Vector.sub(this.position.copy(), createVector(0, -150))
            }}

        if(this.player_id == 1){
            if (keyIsDown(87)) {
                this.position.y -= this.speed;
                this.vectorCollider = p5.Vector.sub(this.position.copy(), createVector(0, -150))
            }
            if (keyIsDown(83)){
                this.position.y += this.speed;
                this.vectorCollider = p5.Vector.sub(this.position.copy(), createVector(0, -150))
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