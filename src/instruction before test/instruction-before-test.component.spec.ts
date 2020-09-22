import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionBeforeTestComponent } from './instruction-before-test.component';

describe('InstructionBeforeTestComponent', () => {
  let component: InstructionBeforeTestComponent;
  let fixture: ComponentFixture<InstructionBeforeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionBeforeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionBeforeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
