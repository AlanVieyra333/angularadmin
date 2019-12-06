import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceMraControlComponent } from './force-mra-control.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ForceMraControlComponent,
  }
];


@NgModule({
  declarations: [ForceMraControlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForceMraControlModule { }
