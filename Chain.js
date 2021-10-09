class Rope{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.rope = Constraint.create(options1);
        World.add(world, this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(){
        this.rope.bodyA = rock.body;   
    }
    display(){
        if(this.rope.bodyA != null){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}