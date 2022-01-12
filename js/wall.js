class Wall{
    constructor(x,y,w,h,img){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;

        this.wall=createSprite(x,y,w,h);
        this.wall.addImage(img);
        this.wall.scale=1.5;
    }
    display(){
        p2.bounceOff(this.wall);
    }
}