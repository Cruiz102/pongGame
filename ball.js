class Ball{
    constructor(){
        this.ballSize = 30
        this.speed = 1.012;
        this.limit = 4
        this.position = createVector(1280/2, 720/2)
        this.velocity = createVector(1, -1);
        this.velocity.normalize()
        this.velocity.limit(this.limit)
    }

    show(){
        circle(this.position.x,this.position.y, this.ballSize)
    }
    move(){
        this.added = this.velocity.mult(this.speed)
        this.position.add(this.added)
        this.velocity.limit(this.limit)
    }

    Walls(){
        // If Player 2 scored
        if(this.position.y <= 0){
            this.velocity.y = -this.velocity.y
        }
        if(this.position.y >= 720){
            this.velocity.y = -this.velocity.y
        }
    }
 
    updateLimit(){
        this.limit ++
    }

    

    update(){
        this.move()
        this.Walls()
        circle(this.position.x, this.position.y, this.ballSize)

    }
}