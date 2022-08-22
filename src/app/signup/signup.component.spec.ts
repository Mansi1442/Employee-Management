import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '../login/login.component';

import { SignupComponent } from './signup.component';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [AuthenticationService],
      declarations: [ SignupComponent,LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(component);
  });
  it('login',()=>{
    expect(LoginComponent).toBe(LoginComponent);
  })
});
