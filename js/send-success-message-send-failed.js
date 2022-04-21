import {templateMessageSuccess} from './form-validation-check.js';

const template = document.querySelector('#error').content;
const templateError = template.querySelector('.error');

function creatingErrorMessage (){
  const copyOfError = templateError.cloneNode(true);
  document.body.appendChild(copyOfError);
  const buttonError= copyOfError.querySelector('.error__button');
  creatingErrorButton(buttonError);
  document.addEventListener('keydown', callEventKeyboard);
  document.querySelector('.error').addEventListener('click', callMouseOfError);
}


function removeErrorWindow (){
  document.querySelector('.error').removeEventListener('click', callMouseOfError);
  document.removeEventListener('keydown', callEventKeyboard);
  document.querySelector('.error').remove();
}

function creatingErrorButton (errorButton){
  errorButton.addEventListener('click',()=>{
    removeErrorWindow();
  });
}

function callEventKeyboard (evt){
  if(evt.key === 'Escape'){
    removeErrorWindow();
  }
}

function callMouseOfError (){
  removeErrorWindow();
}


function creatingSuccessMessage (){
  const copyOfSuccess = templateMessageSuccess.cloneNode(true);
  document.body.appendChild(copyOfSuccess);
  const buttonSuccess= copyOfSuccess.querySelector('.success__button');
  removeSuccessWindow(buttonSuccess);
  document.addEventListener('keydown', callEventKeyboardGod);
  document.querySelector('.success').addEventListener('click', callEventMouse);
}

function removeWindow  (){
  document.querySelector('.success').removeEventListener('click', callEventMouse);
  document.removeEventListener('keydown', callEventKeyboardGod);
  document.querySelector('.success').remove();
}

function removeSuccessWindow (SuccessButton){
  SuccessButton.addEventListener('click',()=>{
    removeWindow();
  });
}

function callEventKeyboardGod (evt){
  if(evt.key === 'Escape'){
    removeWindow();
  }
}

function callEventMouse (){
  removeWindow();
}

export {creatingErrorMessage, creatingSuccessMessage};
