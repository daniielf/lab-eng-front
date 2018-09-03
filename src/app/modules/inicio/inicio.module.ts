import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio.component';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  { path: '', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [InicioComponent],
  providers: [],
  exports: [RouterModule]
})
export class InicioModule { }
