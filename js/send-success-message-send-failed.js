import {templateMessageSuccess} from './form-validation-check.js';

const template = document.querySelector('#error').content;
const templateError = template.querySelector('.error');

function creatingErrorMessage (){
  const copyOfError = templateError.cloneNode(true);
  document.body.appendChild(copyOfError);
  const buttonError= copyOfError.querySelector('.error__button');
  creatingErrorButton(buttonError);
  //document.addEventListener('click', callEventMouse);
  document.addEventListener('keydown', callEventKeyboard);
}


function removeErrorWindow (){
  document.querySelector('.error').remove();
  //document.removeEventListener('click', callEventMouse);
  document.removeEventListener('keydown', callEventKeyboard);
}

function creatingErrorButton (errorButton){
  errorButton.addEventListener('click',()=>{
    removeErrorWindow();
  });
}

function callEventKeyboard (evt) {
  if(evt.key === 'Escape'){
    removeErrorWindow();
  }
}
/*
function callEventMouse (evt){
  if(evt.button === 0){
    removeErrorWindow();
  }
}
*/

function creatingSuccessMessage (){
  const copyOfSuccess = templateMessageSuccess.cloneNode(true);
  document.body.appendChild(copyOfSuccess);
  const buttonSuccess= copyOfSuccess.querySelector('.success__button');
  removeSuccessWindow(buttonSuccess);
  //document.addEventListener('click',callEventMouseGod);
  document.addEventListener('keydown',callEventKeyboardGod);
}

function removeWindow  (){
  document.querySelector('.success').remove();
  //document.removeEventListener('click', callEventMouseGod);
  document.removeEventListener('keydown', callEventKeyboardGod);
}

function removeSuccessWindow (SuccessButton){
  SuccessButton.addEventListener('click',()=>{
    removeWindow();
  });
}

function callEventKeyboardGod (evt) {
  if(evt.key === 'Escape'){
    removeWindow();
  }
}
/*
function callEventMouseGod (evt){
  if(evt.button === 0){
    removeWindow();
  }
}
*/

export {creatingErrorMessage, creatingSuccessMessage};
