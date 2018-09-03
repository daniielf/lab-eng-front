import { ConsultorioModule } from './consultorio.module';

describe('ConsultorioModule', () => {
  let consultorioModule: ConsultorioModule;

  beforeEach(() => {
    consultorioModule = new ConsultorioModule();
  });

  it('should create an instance', () => {
    expect(consultorioModule).toBeTruthy();
  });
});
