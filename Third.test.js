//const { TestWatcher } = require("@jest/core");
const index = require(`./index`);
test(`that cat3 has eaten mouse3`,()=>
{
    index.cat3.hunger=6;
    index.cat3.eat(index.mouse3);
    expect(index.mouse3.alive).toBe(false);
    index.cat3.hunger=0;
    index.mouse3.alive=true;
})
test(`that cat3 is full after eating mouse3`,()=>
{
    index.cat3.hunger=6;
    index.cat3.eat(index.mouse3);
    expect(index.cat3.hunger).toBe(0);
})

test(`that dog3 has eaten cat3`,()=>
{
    index.dog3.ball=false;
    index.dog3.hunger=10;
    index.dog3.eat(index.cat3);
    //console.log(index.dog3.eat(index.cat3));
    expect(index.cat3.alive).toBe(false);
    index.dog3.ball=true;
}) 

test(`that dog3 cant eat cat3 because it has a ball`,()=>
{
    index.cat3.alive=true;
    index.dog3.ball=true;
    index.dog3.eat(index.cat3);
    expect(index.cat3.alive).toBe(true);
})

test(`that cat3 has grown`,()=>
{
    index.cat3.size=0;
    index.cat3.grow()
    expect(index.cat3.size).toBe(1);
}) 
test(`that huge cat dies`,()=>
{
    index.cat3.size=10;
    index.cat3.grow()
    expect(index.cat3.alive).toBe(false);
    index.cat3.size=5;
    index.cat3.alive=true;
})