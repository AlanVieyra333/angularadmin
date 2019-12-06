import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceMraMeshComponent } from './force-mra-mesh.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ForceMraMeshComponent,
    data: {
      title: 'Fuerza MRA - Malla 3D'
    },
  }
];


@NgModule({
  declarations: [ForceMraMeshComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForceMraMeshModule { }
