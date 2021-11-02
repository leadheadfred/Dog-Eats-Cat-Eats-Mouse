//const { TestWatcher } = require("@jest/core");
const index = require(`./index`);
test(`that cat2 has eaten mouse2`,()=>
{
    index.cat2.hunger=6;
    index.cat2.eat(index.mouse2);
    expect(index.mouse2.alive).toBe(false);
    index.cat2.hunger=0;
    index.mouse2.alive=true;
})
test(`that cat2 is full after eating mouse2`,()=>
{
    index.cat2.hunger=6;
    index.cat2.eat(index.mouse2);
    expect(index.cat2.hunger).toBe(0);
})

test(`that dog2 has eaten cat2`,()=>
{
    index.dog2.ball=false;
    index.dog2.hunger=10;
    index.dog2.eat(index.cat2);
    //console.log(index.dog2.eat(index.cat2));
    expect(index.cat2.alive).toBe(false);
    index.dog2.ball=true;
}) 

test(`that dog2 cant eat cat2 because it has a ball`,()=>
{
    index.cat2.alive=true;
    index.dog2.ball=true;
    index.dog2.eat(index.cat2);
    expect(index.cat2.alive).toBe(true);
})

test(`that cat2 has grown`,()=>
{
    index.cat2.size=0;
    index.cat2.grow()
    expect(index.cat2.size).toBe(1);
}) 
test(`that huge cat dies`,()=>
{
    index.cat2.size=10;
    index.cat2.grow()
    expect(index.cat2.alive).toBe(false);
    index.cat2.size=5;
    index.cat2.alive=true;
})