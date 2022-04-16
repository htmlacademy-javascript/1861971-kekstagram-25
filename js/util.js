import {textHashtags, textDescription} from './form-validation-check.js';
import {imgUploadPreview,scaleControlValue} from './scale-and-effect.js';

const socialommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const socialComments = document.querySelector('.social__comments');


function addingComments (numberOfComments, outputComments){
  const commentsCount = socialommentCount.querySelector('.comments-count').value = numberOfComments.length;
  const outputComment = outputComments.querySelectorAll('.social__comment');

  if(outputComment.length > 5){
    for(let i=0; i<5; i++){
      socialComments.appendChild(outputComment[i]);
    }
  }else{
    socialComments.appendChild(outputComments);
  }

  commentsLoader.addEventListener('click', ()=>{
    const listAddedComments = socialComments.querySelectorAll('.social__comment');
    if(listAddedComments.length !== outputComment.length){
      for(let l=listAddedComments.length; l<10; l++){
        socialComments.appendChild(outputComment[l]);
      }
    }
    if(listAddedComments.length === outputComment.length){
      commentsLoader.classList.add('hidden');
    }
    socialommentCount.textContent = `${listAddedComments.length} из ${commentsCount} комментариев`;
  });

}

const offEditorWindow = (evt)=> {
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
  document.addEventListener('keydown', offEditorWindow);
}

function closeEditWindow () {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  textHashtags.value = '';
  textDescription.value = '';
  imgUploadPreview.style.transform = 'scale(1)';
  scaleControlValue.value  = '100%';
  imgUploadPreview.style.filter = 'none';
  document.removeEventListener('keydown', offEditorWindow);
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


function searchRandomPhotos (area,valueSwitches){
  const areaOf10  = [];
  const similarNumbers = [];
  let numberCounter = 10;
  if(!valueSwitches){
    return area;
  }
  for(let i=0; i < numberCounter; i++){
    const numberForArray = Math.floor(Math.random()*(Math.floor(25)-Math.ceil(0)+1))+Math.ceil(0);
    const valueForCondition = similarNumbers.indexOf(numberForArray);
    if(valueForCondition === -1){
      areaOf10[i] = area[numberForArray];
      similarNumbers[i] = numberForArray;
    }else{
      numberCounter +=1;
    }
  }
  return areaOf10;
}
export {openEditWindow, closeEditWindow, getMessageError, debounce, searchRandomPhotos, addingComments};

/*
const string = '';
const maxLengthString = 0;

function checkLengthString (stringtotest, maxlength) { // Результат работы функции: возвращает 'true', если строка проходит по длине, и 'false' если не проходит.
  return (stringtotest.length <= maxlength);
}

checkLengthString (string, maxLengthString);
*/
