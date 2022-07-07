class Ball{
    constructor(){
        this.ballSize = 30;
        this.speed = 3;
        this.limit = 10;
        this.position = createVector(1280/2, 720/2);
        this.velocity = createVector(0, 0);
        this.velocity.normalize();
        this.velocity.limit(this.limit)
        this.delta = createVector(0, 0);

    }

    show(){
        circle(this.position.x,this.position.y, this.ballSize)
        line(this.velocity.x,this.velocity.y,this.delta.x,this.delta.y)

    }
    move(){
        this.position.add(this.velocity.copy().mult(this.speed))
        this.delta = this.position.copy().add( this.velocity.copy().mult( this.speed))
        this.velocity.limit(this.limit)
    }
//Change
    Walls(){
        // If Player 2 scored
        if(this.position.y <= 0){
            this.velocity.y = -this.velocity.y
        }
        if(this.position.y >= 720){
            this.velocity.y = -this.velocity.y
        }
    }
 
    updateVelocity(){
        this.speed += 1.75;
    }

    

    update(){
        if( Singletons.startGame == true){
            this.velocity = createVector(1, 0);
            Singletons.startGame = false;
        }
        this.move()
        this.Walls()
        circle(this.position.x, this.position.y, this.ballSize)

    }
}