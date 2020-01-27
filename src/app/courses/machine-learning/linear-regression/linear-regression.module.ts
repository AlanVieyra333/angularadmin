import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearRegressionComponent } from './linear-regression.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LinearRegressionComponent,
  }
];

@NgModule({
  declarations: [LinearRegressionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LinearRegressionModule { }
