// Challenge 1:
// Write a function that accepts two names as parameters and then console.logs //the full name to the console.
// Example: greeting('Robin', 'Holler')

function greeting(fName, lName, mName='Josh'){
    console.log(fName, lName, mName);
  }
  
  greeting('Robin', 'Holler');
  greeting('Zach', 'Maynard');
  
  //Challenge 1.5:
  //Write a function that accepts a parameter, which is a number, and returns
  //that number with 5 added to it.
  
  let num = 13;
  
  function sum(){
    console.log(num + 5);
  }
  
  //for challenge 2:
  console.log(5%2) //->remainder of 1
  console.log(11%7)//->remainder of 4
  
  sum();
  
  /*
  Challenge 2:
  Write a program that prints all the numbers from 1 to 100.
  For multiples of 3, instead of the number, console.log 'Fizz'.
  For multiples of 5, instead of the number, console.log 'Buzz'.
  For multiples of 3 AND 5, instead of the number, console.log 'Fizz Buzz'.
  */
  
  for (let i = 1; i < 101; i++){
    if (!(i % 15)){
      console.log('fizz buzz');
    } else if (!(i % 3)){
      console.log('fizz');
    } else if (!(i % 5)){
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
  
  /*
  Challenge 3:
  Create an object literal called netflix.
  It will have three properties: id, name, and seasonInfo.
  Id will be an integer and name will be a string.
  SeasonInfo will be an object which will have a property called episodeInfo, which is an array of more objects.
  Those objects have an episode number property and an episodeName property.
  
  You are welcome to fabricate the data.
  */
  
  let show3 = {
    id: 3,
    name: 'Stranger Things',
    seasonInfo: {
      episodeInfo: [
        {epiNumber: 1, epiName: 'Premier'},
        {epiNumber: 2, epiName: 'Premier++'}
      ]
    }
  }
  
  Collapse
  
  
  
  