/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let carouselImages = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"]

function makeCarousel(arr){
  let carousel = document.createElement('div');
  carousel.classList.add('carousel');
  
  let leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.textContent = "<"
  carousel.append(leftButton)

  arr.forEach(element => {
    let image = document.createElement('img');
    image.src = element;
    carousel.append(image);
    image.style.display = 'block';
  });
  
  let rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ">"
  carousel.append(rightButton);

  

  // 
  carousel.style.justifyContent = 'flex-start'
  return carousel;
}
document.querySelector('.carousel-container').append(makeCarousel(carouselImages))

let images = document.querySelectorAll('.carousel img');
let leftButton = document.querySelector('.left-button');
let rightButton = document.querySelector('.right-button');

let current = 1;
let imageWidth = '1200'; 

let carousel = document.querySelector('.carousel');


leftButton.addEventListener('click', () =>{

})