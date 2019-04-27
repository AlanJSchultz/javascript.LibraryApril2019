/*
Write an html page that, upon mouseover of an image, adds a p tag to 
the bottom of the page that says: 'You entered the picture!'.  On mouseleave of
the image, add a p tag that says: 'You left the picture!'.
*/

// adding p tags with javascript
let p = document.createElement('p');
p.innerText = 'hello, Mark!';
let body = document.querySelector('body');
body.appendChild(p);

// using an eventListener
let img = document.getElementById('saturdayMorning');
img.addEventListener('mouseover', function()
{console.log('we listened to the mouseover event!')})
