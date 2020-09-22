import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestChildComponent } from './quest-child.component';

describe('QuestChildComponent', () => {
  let component: QuestChildComponent;
  let fixture: ComponentFixture<QuestChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
