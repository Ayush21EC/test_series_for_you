import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInHomeComponent } from './login-in-home.component';

describe('LoginInHomeComponent', () => {
  let component: LoginInHomeComponent;
  let fixture: ComponentFixture<LoginInHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
