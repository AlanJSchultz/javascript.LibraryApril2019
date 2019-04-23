let carObj = {
    make: 'Scion',
    model: 'XB',
    color: 'blue',
    wheels: 4,
    fast: false
};

// let keys = Object.keys(carObj); // Object.keys returns an array of givens object own property names
// console.log(keys);

// for (let c of keys) {
//     console.log(c);
// };

keys.forEach((key) => {
    console.log(carObj[key]);
})
