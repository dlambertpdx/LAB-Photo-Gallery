import renderImage from './render-image.js';
import images from '../assets/images.js';
import htmlToDOM from './utils/html-to-DOM.js';
import renderHeader from '../src/render-header.js';

const horns = document.querySelector('.horns');
const body = document.getElementById('body');
const radioInput = document.getElementsByName()

const headerHtml = renderHeader();
const headerDom = htmlToDOM(headerHtml);
body.prepend(headerDom);

images.forEach(function(item) {
    const html = renderImage(item);
    const dom = htmlToDOM(html);
    horns.appendChild(dom);
});

