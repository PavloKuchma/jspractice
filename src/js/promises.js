// Task 1

// let i = 0;
// setTimeout(() => alert(i), 100);

// for (let j = 0; j < 1000000000; j++) {
//   i++;
// }

// Task 2

// let a = 1;
// setTimeout(()=>{
//     a = 2;
// }, 1000)
// console.log(a);

// Task 3

// new Promise(() => {
//   console.log("promise");
//   throw new Error("bad err");
// }).then((error) => {
//   console.log("oops Error");
// })
//     .catch(error => {
//     console.log(error)
// })

// console.log("hello world");

// Task 4

// setTimeout(() => console.log(1), 0);

// console.log(2);

// new Promise((res) => {
//   console.log(3);
//   res();
// }).then(() => console.log(4));

// console.log(5);

// Task 5

// Перероби функцію на проміс таким чином, щоб проміс повертав значення через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }

// new Promise((resolve) => {
//     setTimeout(() => resolve("Hello world!"), 2000)
// })
//     .then(data => console.log(data));

//TASK 6
// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const message = Number(prompt('Enter something'));

// function checkNumber(message) {
//   return new Promise((res, rej) => {
//     console.log(message);
//     if (Number.isNaN(message)) rej('ERROR');
//     if (message % 2 === 0) setTimeout(() => res('even'), 1000);
//     if (message % 2 !== 0) setTimeout(() => res('odd'), 2000);
//   });
// }
// checkNumber(message)
//   .then(response => console.log(response))
//   .catch(error => console.log(error));
