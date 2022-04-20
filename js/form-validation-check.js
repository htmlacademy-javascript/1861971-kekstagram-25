import {closeEditWindow} from './util.js';
import {creatingErrorMessage,creatingSuccessMessage} from './send-success-message-send-failed.js';

const template = document.querySelector('#success').content;
const templateMessageSuccess = template.querySelector('.success');

const formForValidation = document.querySelector('.img-upload__form');
const textDescription = formForValidation.querySelector('.text__description');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadSubmit = document.querySelector('.img-upload__submit');
const textHashtags = formForValidation.querySelector('.text__hashtags');


uploadCancel.addEventListener('click', ()=>{
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
  return  value.length !== 0;
}

formForValidation.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid){
    const formData = new FormData(evt.target);
    fetch('https://25.javascript.pages.academy/kekstagram',
      {
        method:'POST',
        body:formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          closeEditWindow();
          creatingSuccessMessage();
          formForValidation.reset();
        } else {
          creatingErrorMessage();
        }
      })
      .catch(()=>creatingErrorMessage());
  }
});


textDescription.addEventListener('input', ()=>{
  if (textDescription.value.length <= 140) {
    imgUploadSubmit.disabled = false;
  }else{
    imgUploadSubmit.disabled = true;
  }
});

export{textHashtags, textDescription, templateMessageSuccess};
