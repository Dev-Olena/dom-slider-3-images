const slides = [{
    src: 'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape1',
    description: 'Lorem ipsum dolor sit amet 1'
}, {
    src: 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape2',
    description: 'Lorem ipsum dolor sit amet 2'
}, {
    src: 'https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape3',
    description: 'Lorem ipsum dolor sit amet 3'
}, {
    src: 'https://images.pexels.com/photos/1462892/pexels-photo-1462892.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape4',
    description: 'Lorem ipsum dolor sit amet 4'
}, {
    src: 'https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape5',
    description: 'Lorem ipsum dolor sit amet 5'
}, {
    src: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'landscape6',
    description: 'Lorem ipsum dolor sit amet 6'
}];

const [prevBtn, nextBtn] = document.querySelectorAll('button');
const prevImage = document.querySelector('#prevImg');
const currentImage = document.querySelector('#currentImg');
const nextImage = document.querySelector('#nextImg');
const imgDescription = document.querySelector('#currentImg + p');



const slider = new Slider(slides);

function updateSlider() {
    currentImage.src = slider.currentSlide.src;
    currentImage.alt = slider.currentSlide.alt;
    imgDescription.textContent = slider.currentSlide.description;

    nextImage.src = slides[slider.next].src;
    nextImage.alt = slides[slider.next].alt;

    prevImage.src = slides[slider.prev].src;
    prevImage.alt = slides[slider.prev].alt;
}

function createBtnHandler(direction) {
    return function(){
        slider.currentIndex = slider[direction];
        updateSlider(); 
    }
}

prevBtn.addEventListener('click', createBtnHandler('prev'))

nextBtn.addEventListener('click', createBtnHandler('next'));

updateSlider();


