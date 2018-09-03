import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbrigoEditComponent } from './abrigo-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AbrigoModule } from '../abrigo.module';
import { UsuarioModule } from '../../usuario/usuario.module';

const routes: Routes = [
  { path: '', component: AbrigoEditComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TabsModule.forRoot(),
    FormsModule,
    CommonModule,
    NgSelectModule,
    HttpClientModule,
    UsuarioModule,
    AbrigoModule
  ],
  declarations: [AbrigoEditComponent],
  exports: [RouterModule],
  providers: []
})
export class AbrigoEditModule { }
