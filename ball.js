class Ball{
    constructor(){
        this.ballSize = 30
        this.speed = 1.012;
        this.position = createVector(1280/2, 720/2)
        this.velocity = createVector(0, -1);
        this.velocity.normalize()
        this.velocity.limit(4)
    }

    show(){
        circle(this.position.x,this.position.y, this.ballSize)
    }
    move(){
        this.added = this.velocity.mult(this.speed)
        this.position.add(this.added)
        this.velocity.limit(20)
    }

    Walls(){
        // If Player 2 scored
        if (this.position.x <= 0){
            this.position.x = 1280/2
            this.position.y = 720/2
        }
        if(this.position.x >= 1280){
            this.position.x = 1280/2
            this.position.y = 720/2
        }
        if(this.position.y <= 0){
            this.velocity.y = -this.velocity.y
        }
        if(this.position.y >= 720){
            this.velocity.y = -this.velocity.y
        }
    }

    update(){
        this.move()
        this.Walls()
        circle(this.position.x, this.position.y, this.ballSize)

    }
}