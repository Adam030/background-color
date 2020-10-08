const button = document.getElementById('button');
const body = document.querySelector('body')


button.addEventListener('click', function(){
   let colors = ['blue', 'red', 'yellow', 'green', 'orange', 'black', 'brown'];


   let randmomNumber = Math.floor(Math.random() * colors.length);

   
   let randomColor = colors[randmomNumber];

   console.log(randomColor)
   app.style.background = randomColor;
});   

