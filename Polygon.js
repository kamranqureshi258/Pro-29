class Polygon{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        polygon = Bodies.circle(x,y,radius);
        polygon.image = loadImage("polygon.png");
        World.add(world,polygon);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(polygon.body.position.x,polygon.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon.image, 0, 0, polygon.position.x,polygon.position.y,40,40);
        Pop()
      }
}

