import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ConsultorioLoginModule } from './modules/consultorio-login/consultorio-login.module';
import { FormRegistroConsultorioModule } from './modules/form-registro-consultorio/form-registro-consultorio.module';
import { EditarConsultorioComponent } from './modules/consultorio/editar/editar-consultorio/editar-consultorio.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { FormsModule } from '@angular/forms';

import { AuthHttp } from './services/auth.http.service';
import { UsuarioModule } from './modules/usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent,
    EditarConsultorioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    FormRegistroConsultorioModule,
    FormsModule,
    HttpModule,
    UsuarioModule,
    ModalModule.forRoot(),
  ],
  providers: [AuthHttp],
  bootstrap: [AppComponent]
})
export class AppModule { }
