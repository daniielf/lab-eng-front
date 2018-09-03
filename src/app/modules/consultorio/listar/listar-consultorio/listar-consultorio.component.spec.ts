import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsultorioComponent } from './listar-consultorio.component';

describe('ListarConsultorioComponent', () => {
  let component: ListarConsultorioComponent;
  let fixture: ComponentFixture<ListarConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
