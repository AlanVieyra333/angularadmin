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
    path: 'fuerza-mra-control',
    loadChildren: () => import('./force-mra-control/force-mra-control.module')
      .then(m => m.ForceMraControlModule),
    data: {
      title: 'Fuerza MRA con Control - Simulación de tocar'
    },
  }, {
    path: 'fuerza-mra-3d',
    loadChildren: () => import('./force-mra-mesh/force-mra-mesh.module')
      .then(m => m.ForceMraMeshModule),
    data: {
      title: 'Fuerza MRA - Malla 3D'
    },
  }, {
    path: 'deteccion-colisiones-investigacion',
    loadChildren: () => import('./collision-detection-investigation/collision-detection-investigation.module')
      .then(m => m.CollisionDetectionInvestigationModule),
    data: {
      title: 'Detección de Colisiones - Investigación'
    },
  }, {
    path: 'mundo-virtual-navegacion',
    loadChildren: () => import('./virtual-world-navigation/virtual-world-navigation.module').then(m => m.VirtualWorldNavigationModule),
    data: {
      title: 'Mundo Virtual - Navegación'
    },
  }, {
    path: 'mundo-virtual',
    loadChildren: () => import('./virtual-world-sketch/virtual-world-sketch.module').then(m => m.VirtualWorldSketchModule),
    data: {
      title: 'Mundo Virtual - Bosquejo'
    },
  }, {
    path: 'rehilete',
    loadChildren: () => import('./rehilete/rehilete.module').then(m => m.RehileteModule),
    data: {
      title: 'Rehilete'
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
