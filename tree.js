class Tree{
    constructor(){
   var options = {
        isStatic:true,
        restiution:0,
       friction:1,
    }
    this.body = Bodies.rectangle(600,400,100,600,options);
    this.width = 100;
    this.height = 600;
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
};