/*

Write an html page with a div.  Inside the div, put an h1 tag with the title 'Coolest Avengers:'.
After the h1 tag, use p tags to list each of your favorite Avengers characters.  

Using a script tag, write JavaScript that will move all of the children nodes (the h1 and p tags) from
the div tag and into the body.  The content shouldn't change, but the placement of the h1 and p tags
will be different in the html.  Below is an example of the before and after:

<body>
  <div>
    <h1>Coolest Avengers:</h1>
    <p>Hulk</p>
    <p>Thor</p>
    <p>War Machine</p>
    <p>Scarlet Witch</p>
  </div>
  <script>
    ...
  </script>
</body>

<body>
  <h1>Coolest Avengers:</h1>
  <p>Hulk</p>
  <p>Thor</p>
  <p>War Machine</p>
  <p>Scarlet Witch</p>
  <div></div>
  <script>
    ...
  </script>
</body>

*/



//slacked from tyler:
const div = document.querySelector('div');
const body = document.querySelector('body');

function mover(){
  while (div.hasChildNodes()){
    let element = div.firstChild;
    body.appendChild(element);
  }
}

mover();