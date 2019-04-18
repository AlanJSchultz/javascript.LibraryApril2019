
let obj = {
    key1: 'yeah!', 
    key2: 1150, 
    key3: true, 
    key4: [1,2,3,4], 
    key5: {innerKey: 'mind blown!'}
}

let keys = Object.keys(obj); //Object.keys gives us the names of the keys in an array ->
for (let val of keys){
    console.log(val);
}
