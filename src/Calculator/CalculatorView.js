import './calculator.css';
import { CalculatorsEval } from './CalculatorsEval';
import { setComma, setNumbers, setReverse } from './utilits';

export class CalculatorView extends CalculatorsEval {
  constructor() {
    super();
    this.setListeners();
  }

  setListeners() {
    const BTN = document.querySelectorAll('[data-sign]');
    BTN.forEach((btn) => {
      btn.addEventListener('click', () => {
        switch (btn.dataset.sign) {
          case 'AC':
            this.reset();
            break;
          case 'reverse':
            this.chooseAction(setReverse);
            break;
          case '%':
            this.checkFlag();
            this.setPercent();
            this.checkValues(btn.dataset.sign);
            break;
          case '.':
            this.chooseAction(setComma);
            break;
          case '*':
          case '/':
          case '+':
          case '-':
          case '=':
            this.checkFlag();
            this.setSign(btn.dataset.sign);
            this.checkValues(btn.dataset.sign);
            break;
          default:
            this.chooseAction(setNumbers, btn.dataset.sign);
            break;
        }
      });
    });
  }
}
