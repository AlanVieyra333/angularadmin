import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankTemplateComponent } from './template/blank-template.component';
import { LeftNavTemplateComponent } from './template/left-nav-template.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Alan Fernando Rincón Vieyra'
  },
  children: [
    {
      path: '**',
      component: PageNotFoundComponent
    },
    {
      path: 'home',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Inicio'
      },
    },
    {
      path: 'curriculum-vitae',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Curriculum Vitae'
      },
    },
    {
      path: 'contact',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'Contacto'
      },
    }
  ]
}, {
  path: 'cursos',
  component: LeftNavTemplateComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
