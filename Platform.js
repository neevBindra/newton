class Platform{

    constructor(w,s,d,r){
        var op2={
            isStatic:true
        }
        this.body = Bodies.rectangle(w,s,d,r,op2);
        this.width = d;
        this.height = r;
        World.add(world,this.body);

        
    }

    display(){
       var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}