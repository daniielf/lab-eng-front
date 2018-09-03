import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LayoutSiteComponent } from './layout-site.component';
import { LayoutDashComponent } from '../layout-dash/layout-dash.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutSiteComponent,
    children: [
      { path: '', redirectTo: 'inicio' },
      { path: 'inicio', loadChildren: '../../modules-site/inicio/inicio.module#InicioModule' },
    ]
  },
  {
    path: 'dash',
    component: LayoutDashComponent,
    children: [
      { path: 'inicio', loadChildren: '../../modules/inicio/inicio.module#InicioModule' },
      { path: 'abrigo', loadChildren: '../../modules/abrigo/abrigo-routing.module#AbrigoRoutingModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class LayoutCoreRoutingModule { }
