/*
Задание считается выполненным, если в проекте описаны следующие функции:

Функция, возвращающая случайное целое число из переданного диапазона включительно.
Пример использования функции: имя_функции(от, до);
*/
let minValue;
let maxValue;

function lookforinteger (out, to) { // Результат: целое число из диапазона "от...до"
  if (to > out && out >= 0) { // Учтите, что диапазон может быть только положительный, включая ноль.
    return Math.ceil(Math.random() * (to - out)) + out; // А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
  } if (to <= out) {
    to = out;
    out = to;
    return Math.ceil(Math.random() * (to - out)) + out;
  } if (out < 0) {
    out = 0;
    return Math.ceil(Math.random() * (to - out)) + out;
  }
}

lookforinteger (minValue, maxValue);
/*Функция для проверки максимальной длины строки.
Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.
Пример использования функции: имя_функции(проверяемая_строка, максимальная_длина);
 */
let string;
let maxLengthString;

function checklengthstring (stringtotest, maximumlength) { // Результат: true, если строка проходит по длине, и false — если не проходит
  if (stringtotest.length <= maximumlength) {
    return true;
  }
  return false;
}

checklengthstring (string, maxLengthString);

