const invoice = 150;
const stock = 100;
let message =
  stock >= invoice
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
console.log(message);
