//const { TestWatcher } = require("@jest/core");
const index = require(`./index`);
test(`that cat1 has eaten mouse1`,()=>
{
    index.cat1.hunger=6;
    index.cat1.eat(index.mouse1);
    expect(index.mouse1.alive).toBe(false);
    index.cat1.hunger=0;
    index.mouse1.alive=true;
})
test(`that cat1 is full after eating mouse1`,()=>
{
    index.cat1.hunger=6;
    index.cat1.eat(index.mouse1);
    expect(index.cat1.hunger).toBe(0);
})

test(`that dog1 has eaten cat1`,()=>
{
    index.dog1.ball=false;
    index.dog1.hunger=10;
    index.dog1.eat(index.cat1);
    console.log(index.dog1.eat("cat1"));
    expect(index.cat1.alive).toBe(false);
    index.dog1.ball=true;
}) 
test(`that dog1 cant eat cat1 because it has a ball`,()=>
{
    index.cat1.alive=true;
    index.dog1.ball=true;
    index.dog1.eat(index.cat1);
    expect(index.cat1.alive).toBe(true);
})
test(`that dog1 has grown`,()=>
{
    index.dog1.size=0;
    index.dog1.grow()
    expect(index.dog1.size).toBe(1);
})
test(`that huge cat dies`,()=>
{
    index.cat1.size=10;
    index.cat1.grow()
    expect(index.cat1.alive).toBe(false);
    index.cat1.size=5;
    index.cat1.alive=true;
})