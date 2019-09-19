import { TablesComponent } from './../tables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: TablesComponent,
  data: {
    title: 'Cursos Realizados'
  }
}, {
  path: 'realidad-virtual',
  pathMatch: 'full',
  component: TablesComponent,
  data: {
    title: 'Realidad Virtual'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
