class Mouse
{
    constructor(size,color,alive)
    {
        this.size=size;
        this.color=color;
        this.alive=alive
    }
    mouseEaten()
    {
        this.alive=false;
    }
    grow()
    {
        this.size=this.size+1;
        if (this.size>10)
        {
            this.alive=false
        }
    }
}
class Cat
{
    constructor(size,color,hungry,alive)
    {
        this.size=size;
        this.color=color;
        this.hungry=hungry;
        this.alive=alive
    }
    grow()
    {
        this.size=this.size+1;
        this.hunger=this.hunger+1;
        if (this.size>10)
        {
            this.alive=false
        }
    }
    eat(mouse)
    {
        if (this.hunger>5)
        {
            mouse.mouseEaten()
            this.hunger=0;
        }
        else
        {
            //console.log("Cat not hungry")
        }
    }
    catEaten()
    {
        this.alive=false;
    }
}
class Dog
{
    constructor(size,color,hungry,ball)
    {
        this.size=size;
        this.color=color;
        this.hungry=hungry;
        this.ball=ball
    }
    grow()
    {
        this.size=this.size+1;
        this.hunger=this.hunger+1;
        if (this.size>10)
        {
            this.alive=false
        }
    }
    eat(cat)
    {
        if (this.hunger>5 && this.ball==false)
        {
            cat.catEaten();
            this.hunger=0;
        }
        else
        {
            //console.log("Dog not hungry or mouth is full")
        }
    }
}
const mouse1= new Mouse(1,"brown",true);
const mouse2= new Mouse(4,"white",true);
const mouse3= new Mouse(7,"ugly",true);
const cat1= new Cat(1,"tortoise",5,true);
const cat2= new Cat(4,"ginger",7,true);
const cat3= new Cat(7,"ugly",8,true);
const dog1 = new Dog(8,"chocolate",7,true)
const dog2 = new Dog(3,"blue",3,false)

module.exports = 
{
    Mouse,
    mouse1,
    mouse2,
    mouse3,
    Cat,
    cat1,
    cat2,
    cat3,
    Dog,
    dog1,
    dog2,
}
