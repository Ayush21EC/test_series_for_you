import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingcomnentComponent } from './routingcomnent.component';

describe('RoutingcomnentComponent', () => {
  let component: RoutingcomnentComponent;
  let fixture: ComponentFixture<RoutingcomnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingcomnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingcomnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
