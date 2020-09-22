import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasoningzComponent } from './reasoningz.component';

describe('ReasoningzComponent', () => {
  let component: ReasoningzComponent;
  let fixture: ComponentFixture<ReasoningzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasoningzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasoningzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
