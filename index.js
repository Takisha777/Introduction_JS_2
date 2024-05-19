let question_1 = Number(prompt('Сколько будет 2 + 2?').trim());
let question_2 = Number(prompt('Сколько будет 2 * 2?').trim());
let question_3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim());
let question_4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim());
let question_5 = Number(prompt('Сколько будет 2 + 2 * 2?').trim());

let answer_1 = Number(4);
let answer_2 = Number(4);
let answer_3 = Number(1);
let answer_4 = Number(12);
let answer_5 = Number(6);

let correctAnswers = 0;
let incorrectAnswers = 0;

if (question_1===answer_1) {
    correctAnswers++;
}else {
    incorrectAnswers++;
}
if (question_2===answer_2) {
    correctAnswers++;
}else {
    incorrectAnswers++;
}
if (question_3===answer_3) {
    correctAnswers++;
}else {
    incorrectAnswers++;
}
if (question_4===answer_4) {
    correctAnswers++;
}else {
    incorrectAnswers++;
}
if (question_5===answer_5) {
    correctAnswers++;
}else {
    incorrectAnswers++;
}
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)