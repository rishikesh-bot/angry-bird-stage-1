//Creating a Box Class
//Class is a design of an object (Properties and function)
class Box{
//Constructor function is used to create properties - x,y,width,height
constructor(x,y,width,height){
var options={
    restitution:0.8,
    density:1.0,
    friction:1.0
}
    this.x=x
    this.y=y
    this.width = width;
    this.height=height;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
   
    World.add(world,this.body)
}
//function
display(){
    var pos = this.body.position; //pos will contain x and y value of the body
    var angle = this.body.angle;

    push() //helps add new settings(translate,rotate) to the object
    //translate() is used for displacement
    translate(pos.x,pos.y)
    rotate(angle) //to rotate to the given angle
    rectMode(CENTER);
    fill("blue")

    //Rect() always draw a rectangle straight so it doesn't allow the object to rotate, displace or change it's angle
    rect(0,0,this.width,this.height)
    pop() //to revert to the old settings
}
}