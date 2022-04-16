import {createPhotos,imageFilter,clickComment,click10randomPhotos,clickphotoInitialOrder} from './drawing-thumbnail.js';
import  './drawing-full-size-image.js';
import  './form-validation-check.js';
import   './scale-and-effect.js';
import './send-success-message-send-failed.js';
import {getMessageError,debounce} from './util.js';
import './photo-selection.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      imageFilter.classList.remove('img-filters--inactive');
      return response;
    } else {
      getMessageError();
    }
  })
  .then((response)=>response.json())
  .then((arrayWithPhotoData)=>{createPhotos(arrayWithPhotoData);
    clickComment(debounce(() => createPhotos(arrayWithPhotoData)));
    click10randomPhotos(debounce(() => createPhotos(arrayWithPhotoData)));
    clickphotoInitialOrder(debounce(() => createPhotos(arrayWithPhotoData)));
  })
  .catch(() => getMessageError());
