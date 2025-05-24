
const images = [...document.querySelectorAll('.image')];

//popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image.name');
const largeImage = document.querySelector('.large-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; //tracking current image;

images.forEach((item, i) => {
  item.addEventListener('click', () => {
    popup.classList.toggle('active');
    updateImage(i)
  })
})

const updateImage = (i) => {
  let path = images[i].getAttribute('src');
    //'imgs/img${i+1}.png'
  largeImage.src = path;
  //imageName.innerHTML = path;
  //imageIndex.innerHTML = '${i + 1}';
  index = i;
}

closeBtn.addEventListener('click', (event) =>{
  popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () =>{
  if(index > 0){
    updateImage(index - 1);
  } else {
    //Scroll to last image in gallery
    updateImage(images.length - 1);
  }
})

rightArrow.addEventListener('click', () =>{
  if(index < images.length - 1){
    updateImage(index + 1);
  } else {
    //Scroll to the beginning of the gallery
    updateImage(0);
  }
})











