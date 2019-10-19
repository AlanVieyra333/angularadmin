import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CoursesComponent,
  },
  {
    path: 'realidad-virtual',
    loadChildren: () => import('./virtual-reality/virtual-reality.module').then(m => m.VirtualRealityModule),
    data: {
      title: 'Realidad Virtual'
    },
  }
];

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }
