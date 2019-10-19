import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CurriculumVitaeComponent,
  }
];

@NgModule({
  declarations: [CurriculumVitaeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CurriculumVitaeModule { }
