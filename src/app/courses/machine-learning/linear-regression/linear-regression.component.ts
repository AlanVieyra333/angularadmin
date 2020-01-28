import { Component, OnInit } from '@angular/core';

interface Dataset {
  x: number;
  y: number;
};

interface RLTest {
  title: string;
  image: string,
  train: {
    dataset: Dataset[],
    mean_squared_error: number;
    r2: number;
  };
  test: {
    dataset: Dataset[],
    mean_squared_error: number;
    r2: number;
  };
  coef: number[];
};

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.scss']
})
export class LinearRegressionComponent implements OnInit {
  eq_regLin1 = 'y = p_0 + p_1 x';
  eq_modelo1 = 'Y_i = \\sin(\\frac{2 \\pi X_i}{10}) + U(0, 0.5)';
  eq_modelo2 = 'X_i \\in [0,9]';
  examples: RLTest[] = [];

  constructor() { }

  ngOnInit() {
    this.examples.push({
      title: 'Polinomio 1',
      image: 'assets/images/ml/01_lin_reg_1.png',
      train: {
        dataset: [{
          x: 0,
          y: 0.32603951,
        }, {
          x: 1,
          y: 0.83682694,
        }, {
          x: 2,
          y: 1.16497837,
        }, {
          x: 3,
          y: 1.09507416,
        }, {
          x: 4,
          y: 0.63814459,
        }, {
          x: 5,
          y: 0.41740515,
        }, {
          x: 6,
          y: -0.51224806,
        }, {
          x: 7,
          y: -0.67314678,
        }, {
          x: 8,
          y: -0.64072604,
        }, {
          x: 9,
          y: -0.55798453,
        }],
        mean_squared_error: 0.68,
        r2: -0.37,
      },
      test: {
        dataset: [{
          x: 0.76075078,
          y: 0.57146803,
        }, {
          x: 5.31303353,
          y: -0.06000209,
        }, {
          x: 4.20950546,
          y: 0.899185,
        }, {
          x: 1.15157452,
          y: 1.08642291,
        }, {
          x: 8.36223493,
          y: -0.69017079,
        }, {
          x: 0.19173255,
          y: 0.2305584,
        }, {
          x: 5.43351751,
          y: -0.21584378,
        }, {
          x: 0.91089197,
          y: 1.0275441,
        }, {
          x: 8.42385254,
          y: -0.36704775,
        }, {
          x: 5.77391012,
          y: -0.13538426,
        },],
        mean_squared_error: 0.14,
        r2: 0.60,
      },
      coef: [
        1.09668412,//33859579,
        -0.19716618],
    }, {
      title: 'Polinomio 2',
      image: 'assets/images/ml/01_lin_reg_2.png',
      train: {
        dataset: [{
          x: 0,
          y: 0.20280708,
        }, {
          x: 1,
          y: 0.7140392,
        }, {
          x: 2,
          y: 1.0710732,
        }, {
          x: 3,
          y: 1.38732899,
        }, {
          x: 4,
          y: 0.88539434,
        }, {
          x: 5,
          y: 0.43206388,
        }, {
          x: 6,
          y: -0.21965941,
        }, {
          x: 7,
          y: -0.7953757,
        }, {
          x: 8,
          y: -0.64517359,
        }, {
          x: 9,
          y: -0.16918037
        }],
        mean_squared_error: 0.54,
        r2: -0.10,
      },
      test: {
        dataset: [{
          x: 1.43058974,
          y: 1.15341482,
        }, {
          x: 1.94458874,
          y: 1.31687639,
        }, {
          x: 6.27984277,
          y: -0.26474317,
        }, {
          x: 4.62578482,
          y: 0.27310172,
        }, {
          x: 4.509363,
          y: 0.58415198,
        }, {
          x: 1.82220484,
          y: 0.92653199,
        }, {
          x: 2.48888371,
          y: 1.03426978,
        }, {
          x: 9.45806296,
          y: 0.07692031,
        }, {
          x: 6.84791267,
          y: -0.56431919,
        }, {
          x: 0.97652862,
          y: 0.98502831,
        }],
        mean_squared_error: 0.15,
        r2: 0.61,
      },
      coef: [
        1.03548403,//72817729,
        -0.16647828],
    }, {
      title: 'Polinomio 3',
      image: 'assets/images/ml/01_lin_reg_3.png',
      train: {
        dataset: [{
          x: 0,
          y: 0.46287043,
        }, {
          x: 1,
          y: 0.58791254,
        }, {
          x: 2,
          y: 1.4491582,
        }, {
          x: 3,
          y: 1.32041149,
        }, {
          x: 4,
          y: 0.8328235,
        }, {
          x: 5,
          y: 0.28419996,
        }, {
          x: 6,
          y: -0.26065647,
        }, {
          x: 7,
          y: -0.50556423,
        }, {
          x: 8,
          y: -0.93593322,
        }, {
          x: 9,
          y: -0.26054599,
        }],
        mean_squared_error: 1.50,
        r2: -1.70,
      },
      test: {
        dataset: [{
          x: 4.76101785,
          y: 0.26732434,
        }, {
          x: 8.76175866,
          y: -0.38262736,
        }, {
          x: 9.20063606,
          y: -0.02285032,
        }, {
          x: 6.02608598,
          y: -0.54918879,
        }, {
          x: 0.20612574,
          y: 0.1464458,
        }, {
          x: 4.32123387,
          y: 0.74661703,
        }, {
          x: 1.66936464,
          y: 1.04388839,
        }, {
          x: 1.75321445,
          y: 1.29922387,
        }, {
          x: 1.85675521,
          y: 1.09637025,
        }, {
          x: 1.17248596,
          y: 0.85173899,
        }],
        mean_squared_error: 0.22,
        r2: 0.42,
      },
      coef: [
        1.17682510,//48076657,
        -0.19541277],
    }, {
      title: 'Polinomio 4',
      image: 'assets/images/ml/01_lin_reg_4.png',
      train: {
        dataset: [{
          x: 0,
          y: 0.00540745,
        }, {
          x: 1,
          y: 1.05462591,
        }, {
          x: 2,
          y: 1.26301611,
        }, {
          x: 3,
          y: 1.02219409,
        }, {
          x: 4,
          y: 0.92287355,
        }, {
          x: 5,
          y: 0.16257119,
        }, {
          x: 6,
          y: -0.37698336,
        }, {
          x: 7,
          y: -0.62731884,
        }, {
          x: 8,
          y: -0.8615883,
        }, {
          x: 9,
          y: -0.56047544,
        }],
        mean_squared_error: 0.77,
        r2: -0.33,
      },
      test: {
        dataset: [{
          x: 7.80095641,
          y: -0.76478186,
        }, {
          x: 4.56926379,
          y: 0.66056947,
        }, {
          x: 2.26386352,
          y: 1.45023093,
        }, {
          x: 7.742936,
          y: -0.72357098,
        }, {
          x: 6.86047274,
          y: -0.81732505,
        }, {
          x: 9.2811413,
          y: -0.20496758,
        }, {
          x: 1.0993516,
          y: 0.92203698,
        }, {
          x: 9.9546809,
          y: 0.23820124,
        }, {
          x: 7.03514271,
          y: -0.71148606,
        }, {
          x: 8.88859176,
          y: -0.18574369,
        }],
        mean_squared_error: 0.33,
        r2: 0.43,
      },
      coef: [
        1.09814009,//90848202,
        -0.19949064],
    });
  }

}
