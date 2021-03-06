"use strict";
//объявляем переменные answer и text, в которых содержаться ответы
let answer=+prompt('answer is a number'); //используем оператор +, чтобы превратить строку в число
let text=prompt('text is a string');
document.write('тип answer это '+typeof(answer));//доказываем, что answer это число
document.write(',а 10+answer='+(answer+10));//сумма чисел 10+10=20
document.write(';тип text это '+typeof(text));//доказываем, что text это строка
document.write(',text + answer='+text + answer);//сумма числа и строки '10'+10=1010

