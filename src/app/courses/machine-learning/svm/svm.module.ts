import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvmComponent } from './svm.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SvmComponent,
  }
];

@NgModule({
  declarations: [SvmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    TabViewModule,
  ]
})
export class SvmModule { }
