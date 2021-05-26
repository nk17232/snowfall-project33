class Snowflake{
   constructor(x,y){
    var options = {
        restitution:1,
        friction: 0,
        isStatic:false 
    }
    this.image=loadImage("snow4.webp")
     this.r=10;
     this.body=Bodies.circle(x,y,this.r, options);

     World.add(world, this.body); 
   


   } 
   display(){
    var pos=this.body.position;
        var angle = this.body.angle;
        this.r=50;
        this.height=80;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.r, this.height);
        pop();

    
    }
}
