import { FormRegistroConsultorioModule } from './form-registro-consultorio.module';

describe('FormRegistroConsultorioModule', () => {
  let formRegistroConsultorioModule: FormRegistroConsultorioModule;

  beforeEach(() => {
    formRegistroConsultorioModule = new FormRegistroConsultorioModule();
  });

  it('should create an instance', () => {
    expect(formRegistroConsultorioModule).toBeTruthy();
  });
});
