import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaDoArComponent } from './temperatura-do-ar.component';

describe('TemperaturaDoArComponent', () => {
  let component: TemperaturaDoArComponent;
  let fixture: ComponentFixture<TemperaturaDoArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaDoArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaDoArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
