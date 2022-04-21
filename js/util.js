import {textHashtags, textDescription} from './form-validation-check.js';
import {imgUploadPreview,scaleControlValue} from './scale-and-effect.js';

const socialommentCount = document.querySelector('.social__comment-count');

const socialComments = document.querySelector('.social__comments');


function addingComments (numberOfComments, outputComments){
  const commentsCount = numberOfComments.length;
  document.querySelector('.comments-loader').remove();

  const commentsButton = document.createElement('button');
  commentsButton.classList.add('comments-loader', 'social__comments-loader');
  commentsButton.type ='button';
  commentsButton.textContent = 'Загрузить еще';
  document.querySelector('.big-picture__social').insertBefore(commentsButton,document.querySelector('.social__footer'));

  if(outputComments.length > 5){
    for(let i=0; i<5; i++){
      socialComments.appendChild(outputComments[i]);
    }
    socialommentCount.textContent = `5 из ${commentsCount} комментариев`;
  }else{
    for(let l=0; l<outputComments.length; l++){
      socialComments.appendChild(outputComments[l]);
    }
    socialommentCount.textContent = `${outputComments.length} из ${commentsCount} комментариев`;
    commentsButton.classList.add('hidden');
  }
  let counter = 5;


  commentsButton.addEventListener('click',() =>{
    const listAddedComments = socialComments.querySelectorAll('.social__comment');
    if(listAddedComments.length !== outputComments.length){

      if (outputComments.length < counter +5){
        counter = outputComments.length;
      }else{
        counter +=5;
      }

      for(let l=listAddedComments.length; l<counter; l++){
        socialComments.appendChild(outputComments[l]);
      }
    }

    if( outputComments.length === counter ){
      commentsButton.classList.add('hidden');
    }
    socialommentCount.textContent = `${counter} из ${commentsCount} комментариев`;
  });

}


const callTheEditWindowFunction = (evt)=> {
  if(evt.key === 'Escape'){
    const target = evt.target;
    if(target === textHashtags || target === textDescription){
      evt.stopPropagation();
    }else{
      closeEditWindow();
    }
  }
};

function openEditWindow () {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', callTheEditWindowFunction);
}

function closeEditWindow () {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  textHashtags.value = '';
  textDescription.value = '';
  scaleControlValue.value  = '100%';
  imgUploadPreview.style.transform = 'scale(1)';
  imgUploadPreview.style.filter = 'none';
  document.querySelector('.effect-level').classList.add('hidden');
  document.querySelector('.noUi-origin').style.transform = 'translate(0%,0px)';
  document.removeEventListener('keydown', callTheEditWindowFunction);
}

function getMessageError () {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 9999;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Не удалось получить данные на стороне сервера. Попробуйте ещё раз';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function searchRandomPhotos (area,valueSwitches){
  const numbersOfArray  = [];
  const similarNumbers = [];
  let numberCounter = 10;
  if(!valueSwitches){
    return area;
  }
  for(let i=0; i < numberCounter; i++){
    const numberForArray = getRandomPositiveInteger (24, 0);
    const valueForCondition = similarNumbers.indexOf(numberForArray);
    if(valueForCondition === -1){
      numbersOfArray[i] = area[numberForArray];
      similarNumbers[i] = numberForArray;
    }else{
      numberCounter +=1;
    }
  }
  return numbersOfArray;
}

function EnableDisableClass (receivingElement, firstElementOfExemption, secondElementOfExemption) {
  receivingElement.classList.add('img-filters__button--active');
  firstElementOfExemption.classList.remove('img-filters__button--active');
  secondElementOfExemption.classList.remove('img-filters__button--active');
}

export {openEditWindow, closeEditWindow, getMessageError, debounce, searchRandomPhotos, addingComments, EnableDisableClass};

/*
const string = '';
const maxLengthString = 0;

function checkLengthString (stringtotest, maxlength) { // Результат работы функции: возвращает 'true', если строка проходит по длине, и 'false' если не проходит.
  return (stringtotest.length <= maxlength);
}

checkLengthString (string, maxLengthString);

Math.floor(Math.random()*(Math.floor(24)-Math.ceil(0)+1))+Math.ceil(0);
*/
