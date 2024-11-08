const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Ошибка: деление на ноль';
    default:
      return 'Неверный оператор';
  }
}

rl.question('Введите первое число: ', (firstNumber) => {
  rl.question('Введите оператор (+, -, *, /): ', (operator) => {
    rl.question('Введите второе число: ', (secondNumber) => {
      
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Ошибка: пожалуйста, введите корректные числа.');
      } else {
        const result = calculate(num1, num2, operator);
        console.log(`Результат: ${result}`);
      }

      rl.close();
    });
  });
});
