import {getFullPhoto} from './drawing-full-size-image.js';

const template = document.querySelector('#picture').content;
const templateImage = template.querySelector('.picture');
const elementRenderingBlock = document.querySelector('.pictures');


function createPhotos (arrayWithPhotoData){
  const fragmentsOfTemplates = document.createDocumentFragment();
  arrayWithPhotoData.forEach(({url,comments,likes}) => {
    const readySample = templateImage.cloneNode(true);
    readySample.querySelector('.picture__img').src = url;
    readySample.querySelector('.picture__comments').textContent = comments.length;
    readySample.querySelector('.picture__likes').textContent = likes;
    fragmentsOfTemplates.appendChild(readySample);
  });
  elementRenderingBlock.appendChild(fragmentsOfTemplates);
  const arraySmallPictures = elementRenderingBlock.querySelectorAll('.picture');
  getFullPhoto(arrayWithPhotoData,arraySmallPictures);
}

export{createPhotos};
