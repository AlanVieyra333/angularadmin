import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrossValidationComponent } from './cross-validation.component';
import { Routes, RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CrossValidationComponent,
  }
];

@NgModule({
  declarations: [CrossValidationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    TabViewModule,
  ]
})
export class CrossValidationModule { }
