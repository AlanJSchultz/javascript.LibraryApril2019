
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let inc = 'fruit';

console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread!';  //square bracket can be used to add key.value pair to an object
baking.bestKeyEver = 'zucchini';  //dot notation can also be used to add key.value pair to an object

console.log(baking.zucchini);    //better make some bread!
console.log(baking.bestKeyEver);    //zucchini
console.log(baking[baking.bestKeyEver]);    //better make some bread!

let g = 'water';

Object.keys(garden).forEach(key => {
    if (key == g){
        console.log(garden[key]);
    }
})
