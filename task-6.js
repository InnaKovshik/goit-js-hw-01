let input;
let total = 0;
let message = 'Общая сумма чисел равна $[amount]';

amount = 
while (input || input < 0) {
  total = Number(prompt((message = 'Общая сумма чисел равна $[amount]')));
}

console.log(message);

// другой вариант назойливо запрашивать баланс у пользователя пока он не введет число больше 0
// while (!balance || balance < 0) {
//   balance = Number(prompt('Enter amount'));
// }
