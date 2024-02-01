import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asmr-ang-calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  calNumber: string = 'noValue'

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }

  onNumberClick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  onFunctionClick(val: string) {
    if (val == 'c') {
      this.clearAll();
    }
    else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    else if (this.funcT != 'NoFunction') {
      this.secondNumber = this.calValue;
      this.valueCalculate(val);
    }
  }

  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const Total = this.firstNumber + this.secondNumber;
      this.totalAssignValue(Total, val)
    }
    if (this.funcT == '-') {
      const Total = this.firstNumber - this.secondNumber;
      this.totalAssignValue(Total, val)
    }
    if (this.funcT == '*') {
      let Total = 0;
      if (this.secondNumber !== 0) {
        Total = this.firstNumber * this.secondNumber;
        this.totalAssignValue(Total, val)
      } else {
        Total = this.firstNumber * 1;
        this.totalAssignValue(Total, val)
      }
    }
    if (this.funcT == '/') {
      let Total = this.firstNumber;
      if (this.secondNumber !== 0) {
        Total = this.firstNumber / this.secondNumber;
        this.totalAssignValue(Total, val)
      } else {
        this.totalAssignValue(Total, val)
      }
    }
    if (this.funcT == '%') {
      let Total = this.firstNumber;
      if (this.secondNumber != 0) {
        Total = this.firstNumber % this.secondNumber;
      }
      this.totalAssignValue(Total, val)
    }
  }

  totalAssignValue(Total: number, val: string) {
    this.calValue = Total;
    this.firstNumber = Total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == '=') {
      this.onEqualPress();
    }
  }

  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }

  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }

}
