import {createPhotos} from './drawing-thumbnail.js';
import  './drawing-full-size-image.js';
import  './form-validation-check.js';
import   './scale-and-effect.js';
import './send-success-message-send-failed.js';
import {getMessageError} from './util.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response;
    } else {
      getMessageError();
    }
  })
  .then((response)=>response.json())
  .then((arrayWithPhotoData)=>{createPhotos(arrayWithPhotoData);})
  .catch(() => getMessageError());
