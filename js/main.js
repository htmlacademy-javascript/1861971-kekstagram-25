let minValue = -1;
let maxValue = 9;
let messeg ;

function toFindNumber (out, to) {
  if (to > out && out >= 0) {
    return Math.ceil(Math.random() * (to - out)) + out;
  } if (to <= out) { // Условие проверяет что бы параметр 'to' не был больше или равен 'out'. Если условие возвращает 'true'.
    //to = out;         Параметру 'to' присваивается значение 'out'.
    //out = to;         Параметру 'out' присваивается значение 'to'.
    messeg = 'Запущена 1';
  } if (out < 0) { // Условие проверяет что бы параметр 'out' не был отрицательное число по тех.заданию. Если условие возвращает 'true'.
    // out = 0;        Параметру 'out' присваивается число '0'.
    messeg = 'Запущена 2';
  }
  // return Math.ceil(Math.random() * (to - out)) + out;
  return messeg;
}

let result = toFindNumber (minValue, maxValue);
console.log (result);
let string;
let maxLengthString;

function checkLengthString (stringtotest, maxlength) { // Результат работы функции: возвращает 'true', если строка проходит по длине, и 'false' если не проходит.
  return stringtotest.length <= maxlength;
}

checkLengthString (string, maxLengthString);

