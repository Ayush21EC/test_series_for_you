import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRepresentComponent } from './quest-represent.component';

describe('QuestRepresentComponent', () => {
  let component: QuestRepresentComponent;
  let fixture: ComponentFixture<QuestRepresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestRepresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestRepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
