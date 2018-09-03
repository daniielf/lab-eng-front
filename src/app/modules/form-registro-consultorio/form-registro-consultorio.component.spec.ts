import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroConsultorioComponent } from './form-registro-consultorio.component';

describe('FormRegistroConsultorioComponent', () => {
  let component: FormRegistroConsultorioComponent;
  let fixture: ComponentFixture<FormRegistroConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistroConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
