import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualWorldComponent } from './virtual-world.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VirtualWorldComponent,
    data: {
      title: 'Mundo Virtual'
    },
  }
];

@NgModule({
  declarations: [VirtualWorldComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VirtualWorldModule { }
