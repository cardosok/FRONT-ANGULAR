import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmidadeDoArComponent } from './umidade-do-ar.component';

describe('UmidadeDoArComponent', () => {
  let component: UmidadeDoArComponent;
  let fixture: ComponentFixture<UmidadeDoArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmidadeDoArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmidadeDoArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
