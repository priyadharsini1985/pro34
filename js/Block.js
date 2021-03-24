class Block {
    constructor(x,y){
        var options = {
        restitution : 0.4,
        friction : 0.0,
        density : 20
        //isStatic:true
        }
       
        this.body = Bodies.rectangle (x, y, 80,80,options);
        this.width = 80;
        this.height = 80; 
        World.add(world,this.body);       

    }
display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("black");
    fill("red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();


}
}

