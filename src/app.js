import renderImage from './render-image.js';
import images from '../assets/images.js';
import htmlToDOM from './utils/html-to-DOM.js';

const horns = document.querySelector('.horns');

images.forEach(function(item) {
    renderImage(item);
});

