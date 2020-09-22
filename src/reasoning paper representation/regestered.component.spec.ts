import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesteredComponent } from './regestered.component';

describe('RegesteredComponent', () => {
  let component: RegesteredComponent;
  let fixture: ComponentFixture<RegesteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegesteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegesteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
