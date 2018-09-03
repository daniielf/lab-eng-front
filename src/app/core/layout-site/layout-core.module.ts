import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSiteComponent } from './layout-site.component';
import { LayoutCoreRoutingModule } from './layout-core-routing.module';
import { SidebartopSiteComponent } from './sidebartop-site/sidebartop-site.component';
import { LayoutDashComponent } from '../layout-dash/layout-dash.component';
import { SidebartopDashComponent } from '../layout-dash/sidebartop-dash/sidebartop-dash.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsuarioModule } from '../../modules/usuario/usuario.module';
import { AbrigoModule } from '../../modules/abrigo/abrigo.module';
import { AuthHttp } from '../../services/auth.http.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutCoreRoutingModule,
    FormsModule,
    HttpModule,
    UsuarioModule.forRoot(),
    AbrigoModule.forRoot()
  ],
  declarations: [LayoutSiteComponent, LayoutDashComponent, SidebartopSiteComponent, SidebartopDashComponent, SidebarComponent],
  providers: [
    AuthHttp
  ]
})
export class LayoutCoreModule { }
