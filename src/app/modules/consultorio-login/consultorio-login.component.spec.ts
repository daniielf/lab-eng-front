import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioLoginComponent } from './consultorio-login.component';

describe('ConsultorioLoginComponent', () => {
  let component: ConsultorioLoginComponent;
  let fixture: ComponentFixture<ConsultorioLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultorioLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultorioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
