class Ball {
    constructor(x,y,r) {
    
    var option = {
    restitution : 1,
    friction : 0.5,
    density : 0.5
    }
  
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,option);
    World.add(world,this.body)
    
    }
    
    display() {
    var stonepos = this.body.position;
    
    push()
    translate(stonepos.x,stonepos.y);
    strokeWeight(3);
    fill("red");
    ellipse(0,0,this.r, this.r);
    pop()
    
    }
    
    
    
    
    }