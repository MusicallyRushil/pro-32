class box {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility=255;

    }
    display(){
      if (this.body.speed<3){
        super.display();
      }
      else{
      World.remove(world,this.body);
      }
    }
  
  };
  