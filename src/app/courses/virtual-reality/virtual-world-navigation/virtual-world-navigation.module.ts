import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualWorldNavigationComponent } from './virtual-world-navigation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VirtualWorldNavigationComponent,
  }
];

@NgModule({
  declarations: [VirtualWorldNavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VirtualWorldNavigationModule { }
