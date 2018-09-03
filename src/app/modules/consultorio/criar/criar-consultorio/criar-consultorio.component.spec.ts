import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarConsultorioComponent } from './criar-consultorio.component';

describe('CriarConsultorioComponent', () => {
  let component: CriarConsultorioComponent;
  let fixture: ComponentFixture<CriarConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
