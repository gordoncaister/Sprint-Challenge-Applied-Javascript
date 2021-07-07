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
    image.order = 0;
  });
  
  let rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = ">"
  carousel.append(rightButton);
  
  let counter = 1;
  leftButton.addEventListener('click', () =>{
    if(counter <= 4 && counter > 1 ){
      document.querySelector(`.carousel img:nth-of-type(${counter})`).style.order = '-1';
      counter --;
    } else {
      document.querySelector(`.carousel img:nth-of-type(1)`).style.order = 1;
      document.querySelector(`.carousel img:nth-of-type(2)`).style.order = 2;
      document.querySelector(`.carousel img:nth-of-type(3)`).style.order = 3;
      document.querySelector(`.carousel img:nth-of-type(4)`).style.order = 4;
      counter = 4;
    }
    console.log(counter)
  })

  rightButton.addEventListener('click', () =>{
    if(counter < 4 && counter >= 1){
      document.querySelector(`.carousel img:nth-of-type(${counter})`).style.order = '+1';
      console.log(document.querySelector(`.carousel img:nth-of-type(${counter})`))
      counter++;
      console.log(counter)
    } else {
      document.querySelector(`.carousel img:nth-of-type(1)`).style.order = 4;
      document.querySelector(`.carousel img:nth-of-type(2)`).style.order = 3;
      document.querySelector(`.carousel img:nth-of-type(3)`).style.order = 2;
      document.querySelector(`.carousel img:nth-of-type(4)`).style.order = 1;
      counter = 1;
      console.log(counter)
    }
    console.log(counter)
  })

  
  carousel.style.justifyContent = 'flex-start'
  return carousel;
}
document.querySelector('.carousel-container').append(makeCarousel(carouselImages))


