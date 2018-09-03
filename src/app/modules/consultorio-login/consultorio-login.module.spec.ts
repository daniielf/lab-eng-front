import { ConsultorioLoginModule } from './consultorio-login.module';

describe('ConsultorioLoginModule', () => {
  let consultorioLoginModule: ConsultorioLoginModule;

  beforeEach(() => {
    consultorioLoginModule = new ConsultorioLoginModule();
  });

  it('should create an instance', () => {
    expect(consultorioLoginModule).toBeTruthy();
  });
});
