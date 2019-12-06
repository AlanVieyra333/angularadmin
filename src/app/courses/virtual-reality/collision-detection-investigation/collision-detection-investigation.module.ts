import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollisionDetectionInvestigationComponent } from './collision-detection-investigation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CollisionDetectionInvestigationComponent,
    data: {
      title: 'Detección de Colisiones - Investigación'
    },
  }
];


@NgModule({
  declarations: [CollisionDetectionInvestigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollisionDetectionInvestigationModule { }
