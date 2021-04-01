class Ball{
    constructor(x,y,width,height){
        var options={
            'restitution':1,
            'friction':0.4,
            'density':1,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
         World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y,this.height,this.width);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop();
        }
}