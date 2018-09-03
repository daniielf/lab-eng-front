import { NgModule, ModuleWithProviders } from '@angular/core';

import { AbrigoService } from './abrigo.service';

@NgModule({})
export class AbrigoModule {
  static forRoot(): ModuleWithProviders {
      return {
        ngModule: AbrigoModule,
        providers: [ AbrigoService ]
      }
  }
}
