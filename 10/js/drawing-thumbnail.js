import {getFullPhoto} from './drawing-full-size-image.js';


const template = document.querySelector('#picture').content;
const templateImage = template.querySelector('.picture');
const elementRenderingBlock = document.querySelector('.pictures');

const imageFilter = document.querySelector('.img-filters');
const buttonDiscussedPhotos = imageFilter.querySelector('#filter-discussed');
const button10pictures = imageFilter.querySelector('#filter-random');
const photoInitialOrderButton = imageFilter.querySelector('#filter-default');

let numberOfPhotos = 25;
let filterSwitch = 0;
function definingElementRenderingMethod (valueResult){
  if(filterSwitch === 1) {
    return valueResult.comments.length;
  }
}

function getSortingComments(meaning1,meaning2){
  const meaningFirst = definingElementRenderingMethod(meaning1);
  const meaningSecond = definingElementRenderingMethod(meaning2);

  return meaningSecond - meaningFirst;
}


function createPhotos (arrayWithPhotoData){
  const fragmentsOfTemplates = document.createDocumentFragment();
  const arrayCopy = arrayWithPhotoData.slice();
  const arraySorting =  arrayCopy.sort(getSortingComments);
  const arrayPhotoData = arraySorting.slice(0, numberOfPhotos);
  arrayPhotoData .forEach(({url,comments,likes}) => {
    const readySample = templateImage.cloneNode(true);
    readySample.querySelector('.picture__img').src = url;
    readySample.querySelector('.picture__comments').textContent = comments.length;
    readySample.querySelector('.picture__likes').textContent = likes;
    fragmentsOfTemplates.appendChild(readySample);
  });
  //elementRenderingBlock.innerHTML = '';
  elementRenderingBlock.appendChild(fragmentsOfTemplates);
  const arraySmallPictures = elementRenderingBlock.querySelectorAll('.picture');
  getFullPhoto(arrayPhotoData,arraySmallPictures);
}

function clickComment (cb){
  buttonDiscussedPhotos.addEventListener('click',()=>{
    filterSwitch = 1;
    numberOfPhotos = 25;
    cb();
  });
}

function click10randomPhotos (cb){
  button10pictures.addEventListener('click',()=>{
    filterSwitch = 0;
    numberOfPhotos = 10;
    cb();
  });
}

function clickphotoInitialOrder (cb){
  photoInitialOrderButton.addEventListener('click',()=>{
    filterSwitch = 0;
    numberOfPhotos = 25;
    cb();
  });
}

export{createPhotos,imageFilter,clickComment,click10randomPhotos,clickphotoInitialOrder};
