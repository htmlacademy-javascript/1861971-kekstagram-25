import {arrayWithPhotoData} from './data.js';
import {getRandomArrayElement} from './util.js';

const smallImages = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const scroll = document.querySelector('body');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.children;


function createCommentList (dataPicture,id) {
  //console.log(dataPicture);
  //const arraylistComment = [];
  const listComment = document.createElement('li');
  listComment.classList.add('social__comment');
  listComment.insertAdjacentHTML ('beforeend' , `<img class="social__picture" src="${dataPicture[id].avatar}" alt="${dataPicture[id].name}" width="35" height="35">`);
  listComment.insertAdjacentHTML ('beforeend' , `<p class="social__text"> ${dataPicture[id].message} </p>`);
  /*
  console.log(listComment);
  arraylistComment [id] = listComment;
  return arraylistComment;
  */
  return listComment;
}

function setEvents (buttonSmallPicture, dataPicture, arraycardltem) {
  console.log(arraycardltem);
  const {url,likes,comment,description} = dataPicture;
  buttonSmallPicture.addEventListener('click', ()=> {
    removeSocialComments();
    bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.comments-count').textContent = comment.length;
    //socialComments.appendChild(getRandomArrayElement(arraycardltem));
    socialComments.appendChild(+arraycardltem);
    bigPicture.querySelector('.social__caption').textContent = description;
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    scroll.classList.add('modal-open');
  });
}

bigPictureCancel.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  scroll.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt)=> {
  if(evt.key === 'Escape'){
    bigPicture.classList.add('hidden');
    scroll.classList.remove('modal-open');
  }
});

function removeSocialComments () {
  for (let l=0; l<socialComment.length; l++){
    socialComment[l].remove();
  }
}

for (let i=0; i<smallImages.length; i++) {
  const cardltem = createCommentList(arrayWithPhotoData[i].comment,i);
  setEvents(smallImages[i], arrayWithPhotoData[i], cardltem);
  removeSocialComments(cardltem);
  //console.log(cardltem);
}
