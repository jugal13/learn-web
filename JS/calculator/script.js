document.addEventListener("DOMContentLoaded", function () {
  let add = document.getElementById('add');
  let sub = document.getElementById('sub');
  let mul = document.getElementById('mul');
  let divide = document.getElementById('divide');
  let equals = document.getElementById('equals');
  let perc = document.getElementById('perc');
  let clear = document.getElementById('clear');
  let zero = document.getElementById('number0');
  let one = document.getElementById('number1');
  let two = document.getElementById('number2');
  let three = document.getElementById('number3');
  let four = document.getElementById('number4');
  let five = document.getElementById('number5');
  let six = document.getElementById('number6');
  let seven = document.getElementById('number7');
  let eight = document.getElementById('number8');
  let nine = document.getElementById('number9');
  let decimal = document.getElementById('decimal');
  let display = document.getElementById('result');

  let number = '0';
  let expression = '';

  function updateDisplay(res) {
    display.innerHTML = res;
  }

  function inputNumber(num) {
    if (num == '.') {
      number+=num;
    }
    else if(number == '0') {
      number=num;
    }
    else {
      number+=num;
    }
    previousNumber = number;
    updateDisplay(number);
  }

  function inputOperator(op) {
    if (op == '=') {
      expression += previousNumber;
      res = eval(expression);
      expression = '';
      number = '0';
      updateDisplay(res);
    }
    else {
      expression += previousNumber + op;
      number = '';
    }
  }

  zero.addEventListener('click', () => {
    inputNumber('0');
  });

  one.addEventListener('click', () => {
    inputNumber('1');
  });

  two.addEventListener('click', () => {
    inputNumber('2');
  });

  three.addEventListener('click', () => {
    inputNumber('3');
  });

  four.addEventListener('click', () => {
    inputNumber('4');
  });

  five.addEventListener('click', () => {
    inputNumber('5')
  });

  six.addEventListener('click', () => {
    inputNumber('6');
  });

  seven.addEventListener('click', () => {
    inputNumber('7');
  });

  eight.addEventListener('click', () => {
    inputNumber('8');
  });

  nine.addEventListener('click', () => {
    inputNumber('9');
  });

  decimal.addEventListener('click', () => {
    inputNumber('.');
  });

  equals.addEventListener('click', () => {
    inputOperator('=');
  });

  add.addEventListener('click', () => {
    inputOperator('+');
  });

  sub.addEventListener('click', () => {
    inputOperator('-')
  });

  mul.addEventListener('click', () => {
    inputOperator('*');
  });

  divide.addEventListener('click', () => {
    inputOperator('/')
  });

  perc.addEventListener('click', () => {
    number = '' + parseFloat(number)/100;
    updateDisplay(number);
  });

  clear.addEventListener('click', () => {
    number = '0';
    updateDisplay(number);
  });

});