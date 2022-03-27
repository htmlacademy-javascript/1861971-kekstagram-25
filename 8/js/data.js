import {getRandomArrayElement, toFindNumber} from './util.js';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const firstName = [
  'Герман',
  'Макар',
  'Злата',
  'Гриша',
  'Вадим',
  'Лёша'
];

const descriptionPhotos = [
  'город Волгоград',
  'город Нижний-Новгород',
  'город Хабаровск',
  'город Плесецк',
  'город Красноярск',
  'город Дамбай',
  'город Кисловодск',
];

const numberOfObjects = 25;


function buildObject () {
  return {
    id: toFindNumber(1, 25),
    url: `photos/${toFindNumber(1, 25)}.jpg`,
    description: getRandomArrayElement(descriptionPhotos),
    likes: toFindNumber(15, 200),
    comment: getArrObjects(numberOfObjects)
  };
}

function getArrObjects (numberOfRepeatedArrays) {
  const comments = [];
  for (let i=0; i < numberOfRepeatedArrays; i++) {
    comments [i] =  { id: toFindNumber(1, 25),
      avatar:`img/avatar-${toFindNumber(1, 6)}.svg`,
      message: getRandomArrayElement(messages),
      name: getRandomArrayElement(firstName)
    };
  }
  return comments;
}

const arrayWithPhotoData = Array.from({length:numberOfObjects}, buildObject);

export {arrayWithPhotoData};
