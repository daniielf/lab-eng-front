import { NgModule, ModuleWithProviders } from '@angular/core';

import { UsuarioService } from './usuario.service';

@NgModule({})
export class UsuarioModule {
  static forRoot(): ModuleWithProviders {
      return {
        ngModule: UsuarioModule,
        providers: [ UsuarioService ]
      }
  }
}
