// 1) Застосувати функції alert,
// prompt, confirm. Оформити внутрішніми скриптами.
// Написати та викликати власну функцію «Діалог з користувачем»,
// застосувати змінні, умовне розгалуження, цикли.
// Функцію помістити в зовнішній файл-скрипт.
// Підключити до html-документу. Написати та викликати власну функцію
// виводу інформації про розробника сторінки з параметрами (прізвище, імя,
//     посада). Параметру «посада» задати значення за замовчуванням.
//     Написати функцію порівняння двох рядків, більший вивести на екран,
//      використовуючи alert.

const askAge = () => {
  let age = prompt("What is your age?", 0);

  let conf = confirm("Do you confirm?");

  if (conf) {
    alert(`Your age is ${age}`);
  }
};

const sumNumbers = () => {
  let min = Number(prompt("Enter min number", 0));
  while (Number.isNaN(min)) {
    min = Number(prompt("Enter min number", 0));
  }

  let max = Number(prompt("Enter max number", 10));
  while (Number.isNaN(max)) {
    max = Number(prompt("Enter max number", 10));
  }

  let sum = 0;
  for (let i = min; i < max; i++) {
    sum += i;
  }

  if (confirm("Do you want to see the result?")) {
    alert(`Sum is ${sum}`);
  }
};

const aboutDeveloper = (surname, name, position = "developer") => {
  alert(`Developed by ${surname} ${name} on position ${position}`);
};

const compareTwoLines = () => {
  let line1 = prompt("Enter line 1:", "");
  let line2 = prompt("Enter line 2:", "");

  let msg = "Longest line is: ";
  line1.length > line2.length ? alert(msg + line1) : alert(msg + line2);
};
