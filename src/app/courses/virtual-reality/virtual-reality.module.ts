import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualRealityComponent } from './virtual-reality.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VirtualRealityComponent,
  }, {
    path: 'mundo-virtual-navegacion',
    loadChildren: () => import('./virtual-world-navigation/virtual-world-navigation.module').then(m => m.VirtualWorldNavigationModule),
    data: {
      title: 'Tarea'
    },
  }, {
    path: 'mundo-virtual',
    loadChildren: () => import('./virtual-world-sketch/virtual-world-sketch.module').then(m => m.VirtualWorldSketchModule),
    data: {
      title: 'Tarea'
    },
  }, {
    path: 'rehilete',
    loadChildren: () => import('./rehilete/rehilete.module').then(m => m.RehileteModule),
    data: {
      title: 'Tarea'
    },
  }
];

@NgModule({
  declarations: [VirtualRealityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VirtualRealityModule { }
