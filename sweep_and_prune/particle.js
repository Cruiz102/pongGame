class Particle{
    constructor(x, y, radius, color){
        this.position = createVector(x, y)
        this.velocity = createVector(0, 0)
        this.acceleration = createVector(0, 0)
        this.radius = radius
        this.color = color
    }

    update(){
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }
    show(){
        fill(this.color)
        ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
    }

    // create a intersection method for the particle
    intersects(particle){
        let distance = p5.Vector.dist(this.position, particle.position)
        if(distance < this.radius + particle.radius){
            return true
        }
        return false
    }
    // create a method that  changes the direction of the particle when intersects is true
    // it must change the velocity of the particle
    changeDirection(particle){
        let distance = p5.Vector.dist(this.position, particle.position)
        let direction = p5.Vector.sub(this.position, particle.position)
        direction.normalize()
        direction.mult(this.velocity.mag() * 0.5)
        this.velocity = direction

    }

}