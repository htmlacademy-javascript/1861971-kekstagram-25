import {textHashtags, textDescription} from './form-validation-check.js';
import {imgUploadPreview,scaleControlValue} from './scale-and-effect.js';


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

export {openEditWindow, closeEditWindow, getMessageError};

/*
const string = '';
const maxLengthString = 0;

function checkLengthString (stringtotest, maxlength) { // Результат работы функции: возвращает 'true', если строка проходит по длине, и 'false' если не проходит.
  return (stringtotest.length <= maxlength);
}

checkLengthString (string, maxLengthString);
*/
