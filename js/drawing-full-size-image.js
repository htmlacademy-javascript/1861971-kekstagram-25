
const socialComments = document.querySelector('.social__comments');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const scroll = document.querySelector('body');


function createCommentList (comments) {
  const arraylistComment = document.createDocumentFragment();
  for (let i=0; i<comments.length; i++ ) {
    const listComment = document.createElement('li');
    listComment.classList.add('social__comment');
    listComment.insertAdjacentHTML ('beforeend' , `<img class="social__picture" src="${comments[i].avatar}" alt="${comments[i].name}" width="35" height="35">`);
    listComment.insertAdjacentHTML ('beforeend' , `<p class="social__text"> ${comments[i].message} </p>`);
    arraylistComment.appendChild(listComment);
  }
  return arraylistComment;
}

const offBigPicture = (evt)=> {
  if(evt.key === 'Escape'){
    closeBigPicture ();
  }
};

function setEvents (dataPicture, buttonarraySmallPictures) {
  buttonarraySmallPictures.addEventListener('click', ()=>{
    const {url,likes,comments,description} = dataPicture;
    removeSocialComments();
    bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.comments-count').textContent = comments.length;
    const cardltem = createCommentList(comments);
    socialComments.appendChild(cardltem);
    bigPicture.querySelector('.social__caption').textContent = description;
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    scroll.classList.add('modal-open');
    document.addEventListener('keydown', offBigPicture);
  });
}

bigPictureCancel.addEventListener('click', ()=> {
  closeBigPicture ();
});

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  scroll.classList.remove('modal-open');
  document.removeEventListener('keydown', offBigPicture);
}

function getFullPhoto (arrayWithPhotoData,arraySmallPictures){
  for (let i=0; i<arraySmallPictures.length; i++) {
    setEvents(arrayWithPhotoData[i],arraySmallPictures[i]);
  }
}

function removeSocialComments () {
  socialComments.innerHTML = '';
}

export{getFullPhoto};
