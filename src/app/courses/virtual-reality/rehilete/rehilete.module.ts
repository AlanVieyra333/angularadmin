import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RehileteComponent } from './rehilete.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RehileteComponent,
  }
];

@NgModule({
  declarations: [RehileteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RehileteModule { }
