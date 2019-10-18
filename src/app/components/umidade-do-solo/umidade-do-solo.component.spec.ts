import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmidadeDoSoloComponent } from './umidade-do-solo.component';

describe('UmidadeDoSoloComponent', () => {
  let component: UmidadeDoSoloComponent;
  let fixture: ComponentFixture<UmidadeDoSoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmidadeDoSoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmidadeDoSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
