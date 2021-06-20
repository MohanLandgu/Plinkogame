class Partical{

    constructor(x,y,r){
    
    var option={
    
    restitution:0.1
    
    }
    
    this.r=r;
    this.body=Bodies.circle(x,y,r,option)
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body)
    
    }
    
    display(){
    
     var pos=this.body.position
     var angle=this.body.angle
    
     push();
     translate(pos.x,pos.y)
     rotate(angle)
     imageMode(CENTER)
    noStroke();
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.r,this.r)
    pop();
    
    
    
    }
    
    }