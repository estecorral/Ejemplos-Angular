import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginReactivoComponent } from './login-reactivo.component';

describe('LoginReactivoComponent', () => {
  let component: LoginReactivoComponent;
  let fixture: ComponentFixture<LoginReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginReactivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
