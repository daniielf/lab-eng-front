import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoListComponent } from './medico-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MedicoListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [MedicoListComponent],
  exports: [RouterModule]
})
export class MedicoListModule { }
