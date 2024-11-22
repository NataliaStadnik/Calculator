export class CalculatorsEval {
  output = document.querySelector('.output');
  input = document.querySelector('.input');
  val1;
  val2;
  sign;
  result;
  lastExpression;
  flag;

  constructor() {
    this.reset();
  }

  chooseAction(callback, ...arg) {
    this.checkFlag();
    !this.sign
      ? (this.val1 = callback(this.val1, ...arg))
      : (this.val2 = callback(this.val2, ...arg));
    this.setExpression();
  }

  checkFlag() {
    !this.flag && this.reset();
  }

  reset() {
    this.output.textContent = '';
    this.input.textContent = '0';
    this.val1 = '0';
    this.val2 = '';
    this.sign = '';
    this.result = 0;
    this.lastExpression = '';
    this.flag = true;
    return;
  }

  calculate() {
    const number1 = Number(this.val1);
    const number2 = Number(this.val2);

    switch (this.sign) {
      case '+':
        this.result = number1 + number2;
        break;
      case '-':
        this.result = number1 - number2;
        break;
      case '=':
        this.result = number1;
        break;
      case '/':
        this.result = number1 / number2;
        break;
      case '*':
        this.result = number1 * number2;
        break;
    }
    this.outputResult();
  }

  outputResult() {
    this.output.innerHTML = this.parseExpression(this.lastExpression);
    if (
      this.result === Infinity ||
      this.result === -Infinity ||
      isNaN(this.result)
    ) {
      this.result = 'Не определено';
      this.flag = false;
    }
  }

  setExpression() {
    this.input.innerHTML = this.parseExpression(
      `${this.val1}${this.sign}${this.val2}`,
    );
  }

  parseExpression(expression) {
    return expression
      .replaceAll('/', '&#247;')
      .replaceAll('*', '&#215;')
      .replaceAll('.', ',');
  }

  checkValues(signValue) {
    if (
      this.val1.toString().length > 0 &&
      this.val2.toString().length > 0 &&
      this.sign.length > 0
    ) {
      this.evaluateDatas(signValue);
    } else {
      this.sign = signValue;
      this.setExpression();
    }
  }

  evaluateDatas(signValue) {
    if (signValue === '%') {
      this.calculate();
      this.sign = '';
    } else {
      this.lastExpression = `${this.val1}${this.sign}${this.val2}`;
      this.calculate();
      signValue !== '=' ? (this.sign = signValue) : (this.sign = '');
    }
    this.val1 = this.result;
    this.val2 = '';
    this.setExpression();
  }

  setSign(value) {
    if (!this.val1.length === 0) {
      return;
    }
    if (value === '=' && this.val2.length === 0) {
      this.sign = '=';
      this.val2 = ' ';
    }
  }

  setPercent() {
    if (!this.sign) {
      [this.val2, this.val1] = [this.val1, 1];
      this.sign = '*';
      this.lastExpression = this.val2 + '%';
    } else {
      this.lastExpression = `${this.val1}${this.sign}${this.val2}%`;
    }
    this.val2 = (this.val1 * this.val2) / 100;
  }
}
