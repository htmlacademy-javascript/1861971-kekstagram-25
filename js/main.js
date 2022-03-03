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

const comments = [];

function toFindNumber (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElement (elements) {
  return elements[toFindNumber(0, elements.length -1)];
}

function buildObject () {
  return {
    id: toFindNumber(1, 25),
    url: `photos/${toFindNumber(1, 25)}.jpg`,
    description: getRandomArrayElement(descriptionPhotos),
    likes: toFindNumber(15, 200),
    comment: getArrObjects()
  };
}

function getArrObjects () {
  for (let i=0; i < numberOfObjects; i++) {
    comments [i] =  { id: toFindNumber(1, 25),
      avatar:`img/avatar${toFindNumber(1, 25)}.svg.`,
      message: getRandomArrayElement(messages),
      name: getRandomArrayElement(firstName)
    };
  }
  return comments;
}
const arrayWithObject = Array.from({length:numberOfObjects}, buildObject);
console.log (arrayWithObject);

/*
const string = '';
const maxLengthString = 0;

function checkLengthString (stringtotest, maxlength) { // Результат работы функции: возвращает 'true', если строка проходит по длине, и 'false' если не проходит.
  return (stringtotest.length <= maxlength);
}

checkLengthString (string, maxLengthString);
*/
