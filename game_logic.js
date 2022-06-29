class GameLogic{

    constructor(){
        this.totalHits = 0;
        this.leftScore = 0;
        this.rightScore = 0;
        
    }

    scoreLeftPoint(p1,ball,p2){
        this.leftScore++
        document.getElementById("scoreLeft").innerHTML = this.leftScore ;
        console.log(document.getElementById("scoreLeft").innerHTML)
        this.reset(p1,ball,p2)
    }

    scoreRightPoint(p1,ball,p2){
        this.rightScore++
        document.getElementById("scoreRight").innerHTML = this.rightScore ;
        console.log(document.getElementById("scoreRight").innerHTML)
        this.reset(p1,ball,p2)

    }


    reset(p1,ball,p2){
            ball.position.x = 1280/2
            ball.position.y = 720/2
            ball.velocity.x = -ball.velocity.x
            ball.velocity.normalize()
            ball.limit = 5
    }


    hitBallLogic(p1,ball,p2){
        this.p2HitY = ball.position.y >= p2.y  & ball.position.y <= (p2.y + 150)
        if(ball.position.x >= 1240 & this.p2HitY ){
        ball.velocity.x = -ball.velocity.x
        this.totalHits++
        ball.updateLimit()
        }

        this.p1HitY = ball.position.y >= p1.y  & ball.position.y <= p1.y + 150
        if(ball.position.x <= 40 & this.p1HitY ){
        ball.velocity.x = -ball.velocity.x
        this.totalHits++
        ball.updateLimit()
        }


    }

    changeDirectionwithHit




    update(p1,ball,p2){
        this.hitBallLogic(p1,ball,p2)
        if (ball.position.x <= -20){
            this.scoreLeftPoint(p1,ball,p2)
        }
        if (ball.position.x >= 1300){
            this.scoreRightPoint(p1,ball,p2)
        }



    }
}