
let obj = {
    keyA: '1150',
    keyB: 1150,
    keyC: undefined,
    keyD: null,
    keyE: [1, 2, 3]
}

// function func1(x){
//     let arr = []
//     arr.push(Object.keys(x))
//     arr.push(arr[0].length)
//     return arr
// }
// console.log (func1(obj));

const objPlay = (object) => {
    let keys = Object.keys(object); //keys is an array of the keys from object
    let returnArr = []; //this is an empty return array
    for (let i = 0; i < keys.length; i++){ //this for loop goes through every
      //value in the keys array
      if (i % 2 == 0){
        returnArr.push(keys[i]) //this add the even elements to the return array
      }
    }
    return returnArr;
  }

  console.log(objPlay(obj));
  