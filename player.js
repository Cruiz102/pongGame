class Player{
    constructor(x,y, player_id){
        this.x = x
        this.y = y
        this.speed = 7;
        this.player_id = player_id
    }

    show(){
        rect(this.x,this.y,20,150)
    }
    move(){
        if (this.player_id == 2){
            if (keyIsDown(UP_ARROW)) {
                this.y -= this.speed;
            }
            if (keyIsDown(DOWN_ARROW)){
                this.y += this.speed;
            }}

        if(this.player_id == 1){
            if (keyIsDown(87)) {
                this.y -= this.speed;
            }
            if (keyIsDown(83)){
                this.y += this.speed;
            }}

        
        }
    Walls(){
        if(this.y <= 0){
            this.y =0;
        }
        if(this.y >= 570){
            this.y = 570;
        }
    }
    

    update(){
        this.move()
        this.Walls()
        rect(this.x,this.y,20,150)
    }
}