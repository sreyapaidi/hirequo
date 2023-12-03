const images = ['img/AI.png', 'img/Wikis.png', 'img/Projects.png', 'img/Docs.png'];
let currentIndex = 0;
let intervalId;

function startCarousel() {
  intervalId = setInterval(() => {
    changeImage('next');
  }, 3000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

function changeImage(direction) {
  if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else if (direction === 'next') {
    currentIndex = (currentIndex + 1) % images.length;
  }

  const carouselImage = document.getElementById('carouselImage');
  carouselImage.src = images[currentIndex];
  highlightBox(currentIndex);
}

function changeImageByBox(index) {
  currentIndex = index;
  const carouselImage = document.getElementById('carouselImage');
  carouselImage.src = images[currentIndex];
  highlightBox(currentIndex);
}

function highlightBox(index) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, i) => {
    box.style.backgroundColor = i === index ? 'white' : '#ccc';
  });
}


function hoverBox(index) {
  stopCarousel();
  currentIndex = index;
  changeImage('current');
}


function showArrows(show) {
  const arrows = document.querySelectorAll('.arrow');
  arrows.forEach(arrow => arrow.style.display = show ? 'block' : 'none');
}

startCarousel();

const alternateImages = [
  'img/Board.png',
  'img/Table.png',
  'img/Timeline.png',
  'img/Calendar.png',
  'img/Gallery.png',
  'img/List.webp',
];

let currentImageIndex = 0;
const intervalDuration = 3000;

function changeImg(imageUrl, element) {
  const dImage = document.getElementById('dImage');
  clearInterval(imageChangeInterval);
  document.querySelectorAll('.text-box').forEach(box => box.classList.remove('active'));
  element.classList.add('active');
  dImage.src = imageUrl;
}

function autoChangeImage() {
  const dImage = document.getElementById('dImage');
  const currentTextBox = document.querySelector('.text-box.active');
  document.querySelectorAll('.text-box').forEach(box => box.classList.remove('active'));
  if (currentTextBox) {
    currentTextBox.classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % alternateImages.length;
    document.querySelectorAll('.text-box')[currentImageIndex].classList.add('active');
    dImage.src = alternateImages[currentImageIndex];
  }
}

const imageChangeInterval = setInterval(autoChangeImage, intervalDuration);


let currentImageIndexx = 0;
const imageUrls = ['img/Wikis.png', 'img/Design.png', 'img/Product.png', 'img/Marketing.png', 'img/Operations.png', 'img/HR.png'];

function changeImagee(imageUrl, element) {
  clearInterval(autoChangeInterval);

  const displayedImage = document.getElementById('displayedImage');

  document.querySelectorAll('.t-box').forEach(box => box.classList.remove('active'));
  element.classList.add('active');

  displayedImage.src = imageUrl;
}

function changeImageAutomatically() {
  const displayedImage = document.getElementById('displayedImage');
  const activeBox = document.querySelector('.t-box.active');


  activeBox.classList.remove('active');

  currentImageIndexx = (currentImageIndexx + 1) % imageUrls.length;
  const nextBox = document.querySelectorAll('.t-box')[currentImageIndexx];
  nextBox.classList.add('active');

  displayedImage.src = imageUrls[currentImageIndexx];
}

const autoChangeInterval = setInterval(changeImageAutomatically, 3000);