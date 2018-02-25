import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpfDetailComponent } from './opf-detail.component';

describe('OpfDetailComponent', () => {
  let component: OpfDetailComponent;
  let fixture: ComponentFixture<OpfDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpfDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpfDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
