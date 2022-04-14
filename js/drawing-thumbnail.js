import {getFullPhoto} from './drawing-full-size-image.js';
import {searchRandomPhotos} from './util.js';

const template = document.querySelector('#picture').content;
const templateImage = template.querySelector('.picture');
const elementRenderingBlock = document.querySelector('.pictures');

const imageFilter = document.querySelector('.img-filters');
const buttonDiscussedPhotos = imageFilter.querySelector('#filter-discussed');
const button10pictures = imageFilter.querySelector('#filter-random');
const photoInitialOrderButton = imageFilter.querySelector('#filter-default');

let numberOfPhotos = false;
let photoSorting = false;

function getSortingComments(meaning1,meaning2){
  if(photoSorting === true) {
    return meaning2.comments.length - meaning1.comments.length;
  }
}

function createPhotos (arrayWithPhotoData){
  const fragmentsOfTemplates = document.createDocumentFragment();
  const arrayCopy = arrayWithPhotoData.slice();
  const arraySorting =  arrayCopy.sort(getSortingComments);
  const arrayPhotoData = searchRandomPhotos(arraySorting,numberOfPhotos);
  arrayPhotoData .forEach(({url,comments,likes}) => {
    const readySample = templateImage.cloneNode(true);
    readySample.querySelector('.picture__img').src = url;
    readySample.querySelector('.picture__comments').textContent = comments.length;
    readySample.querySelector('.picture__likes').textContent = likes;
    fragmentsOfTemplates.appendChild(readySample);
  });
  elementRenderingBlock.innerHTML = '';
  elementRenderingBlock.appendChild(fragmentsOfTemplates);
  const arraySmallPictures = elementRenderingBlock.querySelectorAll('.picture');
  getFullPhoto(arrayPhotoData,arraySmallPictures);
}

function clickComment (cb){
  buttonDiscussedPhotos.addEventListener('click',()=>{
    photoSorting = true;
    numberOfPhotos = false;
    cb();
  });
}

function click10randomPhotos (cb){
  button10pictures.addEventListener('click',()=>{
    photoSorting = false;
    numberOfPhotos = true;
    cb();
  });
}

function clickphotoInitialOrder (cb){
  photoInitialOrderButton.addEventListener('click',()=>{
    photoSorting = false;
    numberOfPhotos = false;
    cb();
  });
}

export{createPhotos,imageFilter,clickComment,click10randomPhotos,clickphotoInitialOrder};
