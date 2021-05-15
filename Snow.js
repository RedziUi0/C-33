class snow{
    constructor(x,y,r){
        var options={
         isStatic:false,
         restitution:0.3,
         friction:0,
         density:1.2,
         
     
        }
        this.r = r;

        this.image = loadImage("snow4.webp");
        this.width = width;
        this.height = height;
        this.body = Bodies.circle(x, y, r, options)
       
        World.add(world, this.body);
         }
     
         display(){
             var angle = this.body.angle;
             push();
             translate(this.body.position.x, this.body.position.y);
             rotate(angle);
             imageMode(CENTER);
             image(this.image, 0, 0, 2*this.r, 2*this.r);
             pop();
     
         }
     }