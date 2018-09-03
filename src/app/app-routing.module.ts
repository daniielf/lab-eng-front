import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultorioLoginComponent } from './modules/consultorio-login/consultorio-login.component';
import { AppModule } from './app.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', loadChildren: './core/layout-site/layout-core.module#LayoutCoreModule'},
  // { path: 'dash', loadChildren: './core/layout-dash/layout-dash.module#LayoutDashModule'},
  // { path: 'cadastrarabrigo', loadChildren: './modules/abrigo/abrigo-routing.module#AbrigoRoutingModule' },
  // { path: 'consultorio', loadChildren: './modules/consultorio/consultorio.module#ConsultorioModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
