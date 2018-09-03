import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule, MatButtonModule, MatDividerModule, MatSelectModule } from '@angular/material';
import { ConsultorioComponent } from './consultorio.component';
import { ListarConsultorioComponent } from './listar/listar-consultorio/listar-consultorio.component';
import { CriarConsultorioComponent } from './criar/criar-consultorio/criar-consultorio.component';

const routes: Routes = [
  { path: 'cadastrar', component: CriarConsultorioComponent },
  // { path: 'editar', component: EditarConsultorioComponent },
  { path: '', component: ListarConsultorioComponent }

/* { path: '', redirectTo: '/login-consultorio', pathMatch: 'full' },
{ path: 'login-consultorio', component: ConsultorioLoginComponent },
{ path: 'registro-consultorio', component: FormRegistroConsultorioComponent },
{ path: 'consultorio', module: FormRegistroConsultorioComponent },
*/ //  { path: '**', pathMatch: 'full', redirectTo: '/new-messages' },
];

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [ConsultorioComponent, ListarConsultorioComponent, CriarConsultorioComponent]
})
export class ConsultorioModule { }
