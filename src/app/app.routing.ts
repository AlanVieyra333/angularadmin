import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    title: 'Cinvestav | Alan Fernando Rincón Vieyra'
  },
  children: [
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      data: {
        title: 'Inicio'
      },
    },
    {
      path: 'cursos',
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
      data: {
        title: 'Cursos'
      },
    },
    {
      path: 'cv',
      loadChildren: () => import('./curriculum-vitae/curriculum-vitae.module').then(m => m.CurriculumVitaeModule),
      data: {
        title: 'Curriculum Vitae'
      },
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
      data: {
        title: 'Contacto'
      },
    },
    {
      path: '**',
      component: PageNotFoundComponent
    },
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
