import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpfsComponent } from './opfs.component';

describe('OpfsComponent', () => {
  let component: OpfsComponent;
  let fixture: ComponentFixture<OpfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
