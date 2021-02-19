import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearRegressionComponent } from './linear-regression.component';
import { Routes, RouterModule } from '@angular/router';
import { KatexModule } from 'ng-katex';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

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
    RouterModule.forChild(routes),
    KatexModule,
    TableModule,
    TabViewModule
  ]
})
export class LinearRegressionModule { }
