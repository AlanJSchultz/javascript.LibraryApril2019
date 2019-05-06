/*
Write a custom-built promise.  
If Date.now() has an even number of milliseconds, the promise should resolve.
If Date.now() has an odd number of milliseconds, the promise should reject.
In either case, use .then & .catch to handle the resolved or rejected promise and print a message.
*/



// let prom = new Promise((resolve, reject) => {
//     if (5%2 === 0){
//       resolve('this is from the resolved promise');
//     } else {
//       reject('this is from the rejected promise');
//     }
//   });
  
//   prom
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error));
//   Collapse
  
  
  
  
// let initTime = Date.now();

// while (Date.now() - initTime < 5000){
//   console.log(Date.now())
// }

// console.log('welcome to the page!');



let initTime = Date.now();
let prom = new Promise((resolve, reject) => {
  if (initTime % 2 === 0){
    resolve('this is from the resolved promise');
  } else {
    reject('this is from the rejected promise');
  }
});

prom
  .then((value) => console.log(initTime,value))
  .catch((error) => console.log(initTime,error));
