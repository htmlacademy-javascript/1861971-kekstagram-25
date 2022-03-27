import {textHashtags, textDescription} from './form-validation-check.js';

function toFindNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElement (elements) {
  return elements[toFindNumber(0, elements.length -1)];
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
  document.removeEventListener('keydown', offEditorWindow);
}


export {getRandomArrayElement, toFindNumber, openEditWindow, closeEditWindow};

/*
const string = '';
const maxLengthString = 0;

function checkLengthString (stringtotest, maxlength) { // Результат работы функции: возвращает 'true', если строка проходит по длине, и 'false' если не проходит.
  return (stringtotest.length <= maxlength);
}

checkLengthString (string, maxLengthString);
*/
