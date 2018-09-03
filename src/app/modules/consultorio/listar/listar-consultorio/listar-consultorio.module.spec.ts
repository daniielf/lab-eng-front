import { ListarConsultorioModule } from './listar-consultorio.module';

describe('ListarConsultorioModule', () => {
  let listarConsultorioModule: ListarConsultorioModule;

  beforeEach(() => {
    listarConsultorioModule = new ListarConsultorioModule();
  });

  it('should create an instance', () => {
    expect(listarConsultorioModule).toBeTruthy();
  });
});
