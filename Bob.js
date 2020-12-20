class Bob{
    constructor(x,y){
    var op = {
        isStatic:false,
       restitution:1.0,
        friction:1.8,
        density:1.8
    }
       this.body = Bodies.circle(x,y,50,op)
        World.add(world,this.body);
      
    }
    display(){
        var pos = this.body.position;
         push ();
        fill ("pink")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,30);
        pop ();

    }

}