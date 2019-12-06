import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualWorldSketchComponent } from './virtual-world-sketch.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VirtualWorldSketchComponent,
  }
];

@NgModule({
  declarations: [VirtualWorldSketchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VirtualWorldSketchModule { }
