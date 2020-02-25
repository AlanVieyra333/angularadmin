import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcaComponent } from './pca.component';
import { Routes, RouterModule } from '@angular/router';
import { KatexModule } from 'ng-katex';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PcaComponent,
  }
];

@NgModule({
  declarations: [PcaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    KatexModule,
    TableModule,
    TabViewModule,
  ]
})
export class PcaModule { }
