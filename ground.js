//Creating a Ground Class
//Class is a design of an object (Properties and function)
class Ground{
    //Constructor function is used to create properties - x,y,width,height
    constructor(x,y,width,height){
    var options={
        isStatic:true
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
       
        rectMode(CENTER);
        fill("brown")
        
        //Rect() always draw a rectangle straight so it doesn't allow the object to rotate, displace or change it's angle
        rect(pos.x,pos.y,this.width,this.height)
        
    }
    }