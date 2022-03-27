import {arrayWithPhotoData} from './data.js';

const template = document.querySelector('#picture').content;
const templateImage = template.querySelector('.picture');
const elementRenderingBlock = document.querySelector('.pictures');


const fragmentsOfTemplates = document.createDocumentFragment();
arrayWithPhotoData.forEach((value, i) => {
  const {url,likes,comment}=arrayWithPhotoData[i];
  const readySample = templateImage.cloneNode(true);
  readySample.querySelector('.picture__img').src = url;
  readySample.querySelector('.picture__comments').textContent = comment.length;
  readySample.querySelector('.picture__likes').textContent = likes;
  fragmentsOfTemplates.appendChild(readySample);
});
elementRenderingBlock.appendChild(fragmentsOfTemplates);
