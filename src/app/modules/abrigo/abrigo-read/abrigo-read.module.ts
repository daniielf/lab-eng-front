import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbrigoReadComponent } from './abrigo-read.component';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';

import { AbrigoModule } from '../abrigo.module';
import { UsuarioService } from '../../usuario/usuario.service';
import { UsuarioModule } from '../../usuario/usuario.module';

const routes: Routes = [
  { path: '', component: AbrigoReadComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TabsModule.forRoot(),
    CommonModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    UsuarioModule,
    AbrigoModule
  ],
  declarations: [AbrigoReadComponent],
  exports: [RouterModule],
  providers: [
    
  ]
})
export class AbrigoReadModule { }
