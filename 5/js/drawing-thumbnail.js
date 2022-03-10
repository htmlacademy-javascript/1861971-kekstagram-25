import {arrayWithObject} from './data.js';

const template = document.querySelector('#picture').content;
const templateImage = template.querySelector('.picture');

const elementRenderingBlock = document.querySelector('.pictures');
const picturesTitle = elementRenderingBlock.querySelector('.pictures__title');

const fragmentsOfTemplates = document.createDocumentFragment();

for (let i=0; i<=arrayWithObject.length-1; i++) {
  picturesTitle.classList.remove('visually-hidden');
  const readySample = templateImage.cloneNode(true);
  readySample.querySelector('.picture__img').src = arrayWithObject[i].url;
  readySample.querySelector('.picture__comments').textContent = arrayWithObject[i].comment[i].id;
  readySample.querySelector('.picture__likes').textContent = arrayWithObject[i].likes;
  fragmentsOfTemplates.appendChild(readySample);
}

elementRenderingBlock.appendChild(fragmentsOfTemplates);
