
const template = document.querySelector('#error').content;
const templateError = template.querySelector('.error');


function creatingErrorMessage (){
  const copyOfError = templateError.cloneNode(true);
  document.querySelector('body').appendChild(copyOfError);
  const buttonError= document.querySelector('.error__button');
  creatingErrorButton(buttonError);
  //document.addEventListener('keydown', offErrorWindow);
}

function removeErrorWindow (){
  document.querySelector('.error').classList.add('hidden');
  //document.removeEventListener('keydown', offErrorWindow);
}

function creatingErrorButton (errorButton){
  errorButton.addEventListener('click',()=>{
    removeErrorWindow();
  });
}

document.addEventListener('click',()=>{
  removeErrorWindow();
});

/*
const offErrorWindow = (evt)=> {
  if(evt.key === 'Escape'){
    removeErrorWindow();
  };
*/

export {creatingErrorMessage};
