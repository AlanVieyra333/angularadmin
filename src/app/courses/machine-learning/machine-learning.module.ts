import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineLearningComponent } from './machine-learning.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MachineLearningComponent,
  }, {
    path: 'pca',
    loadChildren: () => import('./pca/pca.module')
      .then(m => m.PcaModule),
    data: {
      title: 'Descomposición en Componentes Principales'
    },
  }, {
    path: 'regresion-logistica',
    loadChildren: () => import('./logistic-regression/logistic-regression.module')
      .then(m => m.LogisticRegressionModule),
    data: {
      title: 'Regresión Logística'
    },
  }, {
    path: 'regresion-lineal',
    loadChildren: () => import('./linear-regression/linear-regression.module')
      .then(m => m.LinearRegressionModule),
    data: {
      title: 'Regresión Lineal'
    },
  },
];

@NgModule({
  declarations: [MachineLearningComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MachineLearningModule { }
