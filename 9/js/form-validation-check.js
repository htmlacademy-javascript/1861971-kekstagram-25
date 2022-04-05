import {openEditWindow, closeEditWindow} from './util.js';
import {creatingErrorMessage} from './send-success-message-send-failed.js';

const formForValidation = document.querySelector('.img-upload__form');
const textDescription = formForValidation.querySelector('.text__description');
const battonUploadFile = document.querySelector('#upload-file');
const constuploadCancel = document.querySelector('#upload-cancel');
const imgUploadSubmit = document.querySelector('.img-upload__submit');
const textHashtags = formForValidation.querySelector('.text__hashtags');


battonUploadFile.addEventListener('click', ()=>{
  openEditWindow();
  submitFormAndClosingEditor(closeEditWindow);
});
constuploadCancel.addEventListener('click', ()=>{
  closeEditWindow();
});


const pristine = new Pristine(formForValidation, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

function validateDescription (value) {
  return value.length <= 140;
}

pristine.addValidator(formForValidation.querySelector('.text__description'), validateDescription, 'Длина комментария не может составлять больше 140 символов.');

pristine.addValidator(textHashtags, testInfo, 'Поле не может быть пустое.');

function testInfo (value) {
  return  value === '';
}
function submitFormAndClosingEditor (closeEdit){
  formForValidation.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    const isValid = pristine.validate();
    if (!isValid){
      const formData = new FormData(evt.target);
      fetch('https://25.javascript.pages/got',
        {
          method:'POST',
          body:formData,
        }
      )
        .then((response) => {
          if (response.ok) {
            closeEdit();
          } else {
            creatingErrorMessage();
          }
        })

        .catch(()=>creatingErrorMessage());
    }
  });
}

textDescription.addEventListener('input', ()=>{
  if (textDescription.value.length <= 140) {
    imgUploadSubmit.disabled = false;
  }else{
    imgUploadSubmit.disabled = true;
  }
});

export{textHashtags, textDescription, submitFormAndClosingEditor};
