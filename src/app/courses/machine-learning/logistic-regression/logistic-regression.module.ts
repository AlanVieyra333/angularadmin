import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticRegressionComponent } from './logistic-regression.component';
import { Routes, RouterModule } from '@angular/router';
import { KatexModule } from 'ng-katex';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LogisticRegressionComponent,
  }
];

@NgModule({
  declarations: [LogisticRegressionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    KatexModule,
    TableModule,
    TabViewModule,
  ]
})
export class LogisticRegressionModule { }
