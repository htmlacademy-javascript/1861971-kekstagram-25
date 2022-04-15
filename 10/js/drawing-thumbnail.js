import {getFullPhoto} from './drawing-full-size-image.js';
import {searchRandomPhotos} from './util.js';

const template = document.querySelector('#picture').content;
const templateImage = template.querySelector('.picture');
const elementRenderingBlock = document.querySelector('.pictures');

const imageFilter = document.querySelector('.img-filters');
const buttonDiscussedPhotos = imageFilter.querySelector('#filter-discussed');
const button10pictures = imageFilter.querySelector('#filter-random');
const photoInitialOrderButton = imageFilter.querySelector('#filter-default');

let cropPhotosUpTo10 = false;
let photoSorting = false;

function getSortingComments(meaning1,meaning2){
  return meaning2.comments.length - meaning1.comments.length;
}

function createPhotos (arrayWithPhotoData){
  const fragmentsOfTemplates = document.createDocumentFragment();
  arrayWithPhotoData
    .slice();
  if(photoSorting) { arrayWithPhotoData.sort(getSortingComments);}
  const arrayPhotoData = searchRandomPhotos(arrayWithPhotoData,cropPhotosUpTo10);
  arrayPhotoData .forEach(({url,comments,likes}) => {
    const readySample = templateImage.cloneNode(true);
    readySample.querySelector('.picture__img').src = url;
    readySample.querySelector('.picture__comments').textContent = comments.length;
    readySample.querySelector('.picture__likes').textContent = likes;
    fragmentsOfTemplates.appendChild(readySample);
  });
  removingChildElements();
  elementRenderingBlock.appendChild(fragmentsOfTemplates);
  const arraySmallPictures = elementRenderingBlock.querySelectorAll('.picture');
  getFullPhoto(arrayPhotoData,arraySmallPictures);
}

function removingChildElements (){
  const elementsToDoRemoved = elementRenderingBlock.querySelectorAll('.picture');
  for(let i=0; i<elementsToDoRemoved.length; i++){
    elementsToDoRemoved[i].remove();
  }
}

function clickComment (cb){
  buttonDiscussedPhotos.addEventListener('click',()=>{
    photoSorting = true;
    cropPhotosUpTo10 = false;
    cb();
  });
}

function click10randomPhotos (cb){
  button10pictures.addEventListener('click',()=>{
    photoSorting = false;
    cropPhotosUpTo10 = true;
    cb();
  });
}

function clickphotoInitialOrder (cb){
  photoInitialOrderButton.addEventListener('click',()=>{
    photoSorting = false;
    cropPhotosUpTo10 = false;
    cb();
  });
}

export{createPhotos,imageFilter,clickComment,click10randomPhotos,clickphotoInitialOrder};
