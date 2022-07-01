class GameLogic{

    constructor(gameUI){
        this.gameUI = gameUI
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
            ball.speed = 3;
    }


    hitBallLogic(p1,ball,p2){

        /*
        this.p2HitY = ball.position.y >= p2.position.y  & ball.position.y <= (p2.position.y + 150)
        this.offsetP2 = createVector(ball.position.x -p2.position.x, ball.position.y - (p2.position.y + 150/2)).normalize()
        if(ball.position.x >= 1240 & this.p2HitY ){
        ball.velocity.x = -ball.velocity.x
        ball.velocity.rotate( -this.offsetP2.y * 0.5 )
        this.totalHits++
        ball.updateVelocity()

        }


        this.p1HitY = ball.position.y >= p1.position.y  & ball.position.y <= p1.position.y + 150
        this.offsetP1 = createVector(ball.position.x -p2.position.x, ball.position.y - (p2.position.y + 150/2)).normalize()
        if(ball.position.x <= 40 & this.p1HitY ){
        ball.velocity.x = -ball.velocity.x
        ball.velocity.rotate( this.offsetP1.y * 0.5 )
        this.totalHits++
        ball.updateVelocity()
        }
        */
        
        this.offsetP1 = createVector(0, ball.position.y - (p1.position.y + 150)).normalize()
        if(this.checkRaycastIntersection(p1,ball,p2)[0]){
            ball.velocity.x = -ball.velocity.x
            ball.velocity.rotate( this.offsetP1.y * 0.3 )
            this.totalHits++
            ball.updateVelocity()
        }
        this.offsetP2 = createVector(0, ball.position.y - (p2.position.y + 150)).normalize()
        if(this.checkRaycastIntersection(p1,ball,p2)[1]){
            ball.velocity.x = -ball.velocity.x
            ball.velocity.rotate( -this.offsetP2.y * 0.3 )
            this.totalHits++
            ball.updateVelocity()
        }
        else{
        
        }

    }

    checkRaycastIntersection(p1,ball,p2){
        // Variables with numbers are used to differentiate between p1 and p2
        let u1,u2;
        let t1,t2;
        let c1 = p1.position.copy().add(20,0)
        let c2 = p2.position
        let a1 = p1.vectorCollider.copy().add(20,0)
        let a2 = p2.vectorCollider
        let d = ball.position
        let b = ball.delta
        let r = p5.Vector.sub(b,d)
        let s1 = p5.Vector.sub(a1,c1)
        let s2 = p5.Vector.sub(a2,c2)

        let DxR = crossProduct2d(d,r)
        let C1xR = crossProduct2d(c1,r)
        let C2xR = crossProduct2d(c2,r)
        let S1xR = crossProduct2d(s1,r)
        let S2xR = crossProduct2d(s2,r)

        let C1xS1 = crossProduct2d(c1,s1)
        let C2xS2 = crossProduct2d(c2,s2)
        let DxS1 = crossProduct2d(d,s1)
        let DxS2 = crossProduct2d(d,s2)
        u1 = (DxR - C1xR )/S1xR
        u2 = (DxR - C2xR )/S1xR
        t1 = (C1xS1 - DxS1 )/  -S1xR 
        t2 = (C2xS2 - DxS2 )/  -S2xR 

        if( u1 >= 0 & u1 <= 1 & t1 >= 0 & t1 <= 1){
            return [true, false]
        }
        if( u2 >= 0 & u2 <= 1 & t2 >= 0 & t2 <= 1){
            return [false, true]
        }
        else{
            return [false, false]
        }

    }









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