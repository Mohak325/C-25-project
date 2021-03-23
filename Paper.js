class Paper{
    constructor(x,y){
        var options={
            isStatic : false,
            density : 1.2,
            restitution : 0.3,
            friction : 0
        }
        this.body = Bodies.rectangle(x,y,30,30,options);
        World.add(world,this.body);
        this.image = loadImage("paper.png");

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);

    }
}