/*
Using async/await, write a function that fetches a star wars character using the url:
'https://swapi.co/api/people/<number here>'.  It should console.log the results of the fetch
before console.logging a message saying 'this should print last'.
*/

async function starWarsChar() {
    await fetch('https://swapi.co/api/people/1')
      .then(results => results.json())
      .then(json => console.log(json.name));
    console.log('this should print last');
  }
  starWarsChar();
  