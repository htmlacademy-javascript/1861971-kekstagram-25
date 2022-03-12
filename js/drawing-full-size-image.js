import {arrayWithPhotoData} from './data.js';

const smallImages = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const scroll = document.querySelector('body');
const socialComments = document.querySelector('.social__comments');

function creatingCommentList (dataPictures, id) {
  const listComment = document.createElement('li');
  listComment.classList.add('social__comment');
  const picture = document.createElement('img');
  picture.classList.add('social__picture');
  picture.src = dataPictures.comment[id].avatar;
  picture.alt = dataPictures.comment[id].name;
  picture.width = 35;
  picture.height = 35;
  listComment.appendChild(picture);
  //listComment.innerHTML = `<img class="social__picture" src="${dataPictures.comment[ids].avatar}" alt="${dataPictures.comment[ids].name}" width="35" height="35">`;
  //listComment.insertAdjacentHTML = `<p class="social__text"> ${dataPictures.comment[ids].message} </p>`;
  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  socialText.textContent = dataPictures.comment[id].message;
  listComment.appendChild(socialText);
  return listComment;
}

function getEvents (buttonSmallPicture, dataPicture, idex) {
  buttonSmallPicture.addEventListener('click', ()=> {
    bigPicture.querySelector('.big-picture__img').querySelector('img').src = dataPicture.url;
    bigPicture.querySelector('.likes-count').textContent = dataPicture.likes;
    bigPicture.querySelector('.comments-count').textContent = dataPicture.comment.length;
    socialComments.appendChild(creatingCommentList(dataPicture, idex));
    bigPicture.querySelector('.social__caption').textContent = dataPicture.description;
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    scroll.classList.add('modal-open');
  });

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
}

for (let i=0; i<smallImages.length; i++) {
  getEvents(smallImages[i], arrayWithPhotoData[i], i);
}
