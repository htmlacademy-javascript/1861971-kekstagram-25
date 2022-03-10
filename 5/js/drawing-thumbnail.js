import {arrayWithPhotoData} from './data.js';

const template = document.querySelector('#picture').content;
const templateImage = template.querySelector('.picture');

const elementRenderingBlock = document.querySelector('.pictures');

const fragmentsOfTemplates = document.createDocumentFragment();

arrayWithPhotoData.forEach((value, i) => {
  const readySample = templateImage.cloneNode(true);
  readySample.querySelector('.picture__img').src = arrayWithPhotoData[i].url;
  readySample.querySelector('.picture__comments').textContent = arrayWithPhotoData[i].comment[i].id;
  readySample.querySelector('.picture__likes').textContent = arrayWithPhotoData[i].likes;
  fragmentsOfTemplates.appendChild(readySample);
});

elementRenderingBlock.appendChild(fragmentsOfTemplates);
