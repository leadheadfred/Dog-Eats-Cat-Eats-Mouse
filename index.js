class Mouse //* The class for Mice
{
    constructor(size,color,alive) //*The attributes of my mice. Mice are never hungry
    {
        this.size=size;
        this.color=color;
        this.alive=alive
    }
    mouseEaten() //* Runs when the mouse gets eaten, it dies
    {
        this.alive=false;
    }
    grow() //* The mouse grows. If it grows too big, it dies.
    {
        this.size=this.size+1;
        if (this.size>5)
        {
            this.alive=false
        }
    }
}
class Cat //* The class for Cats
{
    constructor(size,color,hungry,alive) //* The attributes of my Cats
    {
        this.size=size;
        this.color=color;
        this.hungry=hungry;
        this.alive=alive
    }
    grow()  //* The cat grows. This makes its hungry. If it grows too big, it dies.
    {
        this.size=this.size+1;
        this.hunger=this.hunger+1;
        if (this.size>10)
        {
            this.alive=false
        }
    }
    eat(mouse) //* The cat eats a mouse if its hungry, otherwise it returns not hungry
    {
        if (this.hunger>5)
        {
            mouse.mouseEaten()
            this.hunger=0;
        }
        else
        {
            return "Cat not hungry"
        }
    }
    catEaten() //* The cat gets eaten, so its dead.
    {
        this.alive=false;
    }
}
class Dog //* The class for Dogs
{
    constructor(size,color,hungry,ball) //* The attributes of my Dogs
    {
        this.size=size;
        this.color=color;
        this.hungry=hungry;
        this.ball=ball;
    }
    grow()  //* The dog grows. This makes it hungry. Big dogs don't die
    {
        this.size=this.size+1;
        this.hunger=this.hunger+1;

    }
    eat(cat) //* The dog eats a cat if it is hungry and doesn't have a ball in its mouth
    {
        if (this.hunger>5 && this.ball==false)
        {
            cat.catEaten();
            this.hunger=0;
        }
        else
        {
             return "Dog not hungry or mouth is full";
        }
    }
}
const colors = [`red`,`brown`,`white`,`tortoise`,`ginger`,`chocolate`,`blue`,`invisible`]
//* All the different animals
const mouse1= new Mouse(1,"brown",true);
const mouse2= new Mouse(4,"white",true);
const mouse3= new Mouse(7,"ugly",true);
const cat1= new Cat(1,"tortoise",5,true);
const cat2= new Cat(4,"ginger",7,true);
const cat3= new Cat(7,"ugly",8,true);
const dog1 = new Dog(8,"chocolate",7,true)
const dog2 = new Dog(3,"blue",3,false);
const dog3 = new Dog(2,"invisible",3,true);
const dog4 = new Dog(4,"yellow",3,false);
const dog5 = new Dog(6,":)",3,true)

//*Exporting to be used in tests
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
    dog3,
    colors,
    dog4,
    dog5,
}
