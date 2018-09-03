import { EditarConsultorioModule } from './editar-consultorio.module';

describe('EditarConsultorioModule', () => {
  let editarConsultorioModule: EditarConsultorioModule;

  beforeEach(() => {
    editarConsultorioModule = new EditarConsultorioModule();
  });

  it('should create an instance', () => {
    expect(editarConsultorioModule).toBeTruthy();
  });
});
