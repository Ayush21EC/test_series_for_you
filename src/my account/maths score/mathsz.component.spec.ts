import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathszComponent } from './mathsz.component';

describe('MathszComponent', () => {
  let component: MathszComponent;
  let fixture: ComponentFixture<MathszComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathszComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
