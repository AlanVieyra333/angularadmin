import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistic-regression',
  templateUrl: './logistic-regression.component.html',
  styles: ['']
})
export class LogisticRegressionComponent implements OnInit {
  eq_regLog_sigmoide = 'z = \\phi(y) = \\frac{1}{1 + e^{-y}}';
  eq_regLog_convLin = 'y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + ... + \\beta_n x_n';

  constructor() { }

  ngOnInit() {
  }

}
