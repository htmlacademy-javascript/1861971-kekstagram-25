import {openDelegation, closeDelegation, offEditorWindow} from './util.js';

const formForValidation = document.querySelector('.img-upload__form');
const textDescription = formForValidation.querySelector('.text__description');
const battonUploadFile = document.querySelector('#upload-file');
const constuploadCancel = document.querySelector('#upload-cancel');
const imgUploadSubmit = document.querySelector('.img-upload__submit');
const textHashtags = formForValidation.querySelector('.text__hashtags');


battonUploadFile.addEventListener('click', ()=>{
  openDelegation();
});
constuploadCancel.addEventListener('click', ()=>{
  closeDelegation();
});
document.addEventListener('keydown', offEditorWindow);


const pristine = new Pristine(formForValidation, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'form__error'
});

function validateDescription (value) {
  return value.length > 2 && value.length <= 5;
}

pristine.addValidator(formForValidation.querySelector('.text__description'), validateDescription, 'От 2 до 5 символов');

pristine.addValidator(textHashtags, testInfo, 'Хэш-тег начинается с символа #. Строкапосле решотки должна состаять из букв и чисел и неможет содержать пробелы. Хеш-тег не может состоять только из одной решЁтки. Максимальная длина одного хэш-тега 20 символов. Хэш-теги нечуствительны к регистру. ');

const regularExpression = /^#[A-ZaZA-Яа-яЁёО9]{1,19}$/;

function testInfo (value) {
  return regularExpression.test(value);
}

formForValidation.addEventListener('submit',()=>{
  pristine.validate();
});

textDescription.oninput = function() {
  if (textDescription.value.length > 2 && textDescription.value.length <= 5) {
    imgUploadSubmit.disabled = false;
  }else{
    imgUploadSubmit.disabled = true;
  }
};


textHashtags.oninput = function() {
  if(regularExpression.test(textHashtags.value)){
    imgUploadSubmit.disabled = false;
  }else{
    imgUploadSubmit.disabled = true;
  }
};
