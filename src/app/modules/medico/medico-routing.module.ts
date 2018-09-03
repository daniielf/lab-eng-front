import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'listar'},
  { path: 'listar', loadChildren: './medico-list/medico-list.module#MedicoListModule' },
  // { path: 'consultorio', loadChildren: './modules/consultorio/consultorio.module#ConsultorioModule' },
  // { path: 'medicos', loadChildren: './modules/medico/medico.module#MedicoModule'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
