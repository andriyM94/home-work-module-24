// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
console.log("---1---");
// ?
function checkAge1(age) {
  return (age > 18) ? true : confirm('Батьки дозволили?');
}

// ||
function checkAge2(age) {
  return (age > 18) || confirm('Батьки дозволили?');
}

console.log("checkAge1 - ", checkAge1(21));
console.log("checkAge2 - ", checkAge1(11));


// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
console.log("---2---");
const min = (a, b) => {
  return (a < b) ? a : b;
}

console.log(min(5, 7));



// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

console.log("---3---");
// Закоментована функкція також робоча але переписана на стрілковий варіант
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//     else no();
// };

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask("Ви згодні?", 
  () => { alert("Ви погодились."); }, 
  () => { alert("Ви скасували виконання."); }
);
