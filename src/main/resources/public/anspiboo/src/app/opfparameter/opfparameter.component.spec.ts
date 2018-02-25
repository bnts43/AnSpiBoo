import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpfparameterComponent } from './opfparameter.component';

describe('OpfparameterComponent', () => {
  let component: OpfparameterComponent;
  let fixture: ComponentFixture<OpfparameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpfparameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpfparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
