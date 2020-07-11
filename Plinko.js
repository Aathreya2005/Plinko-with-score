class Plinko {
  constructor(x, y) {
    var options = {
      restitution:0.3,
      friction:0.5,
      density:0.3,
      isStatic:true
    }
    this.x= x;
    this.y = y;
    this.color=color(255);
    this.radius=5;
    this.body = Bodies.circle(this.x,this. y, this.radius, options);
  // this.image=loadImage("sprites/paper.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("this.color");
    ellipseMode(RADIUS);
    ellipse(0, 0, this.radius,this.radius);
  // imageMode(CENTER);
  // image(this.image,0,0,this.radius,this.radius);
    pop();
  }
}