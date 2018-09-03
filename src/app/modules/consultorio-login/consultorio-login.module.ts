import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultorioLoginComponent } from './consultorio-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ConsultorioLoginComponent },
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
    NgbModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultorioLoginComponent]
})
export class ConsultorioLoginModule { }
