import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'read'},
  { path: 'read', loadChildren: './abrigo-read/abrigo-read.module#AbrigoReadModule' },
  { path: 'edit', loadChildren: './abrigo-edit/abrigo-edit.module#AbrigoEditModule' },
  // { path: 'consultorio', loadChildren: './modules/consultorio/consultorio.module#ConsultorioModule' },
  // { path: 'medicos', loadChildren: './modules/medico/medico.module#MedicoModule'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AbrigoRoutingModule { }
