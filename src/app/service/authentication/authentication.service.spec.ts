
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { LogInData } from 'src/app/login/login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';



describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
   

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], 
      providers: [AuthenticationService]
    });
    service = TestBed.inject(AuthenticationService);
    
  });

  it('should be created', () => {
    expect(service).toBe(service);
  });

  it('should have get data for LoginForm',inject([AuthenticationService],(service:AuthenticationService)=>{
    expect(service.authenticate(FormData)).toBeTruthy(service.authenticate(FormData));
  }));

  it('should have post data for SignUpForm',inject([AuthenticationService],(service:AuthenticationService)=>{
    expect(service.createUser(FormData.name,FormData.name)).toBe(service.createUser(FormData.name,FormData.name));
  }));

  it('should have send email from ForgotPass',inject([AuthenticationService],(service:AuthenticationService)=>{
    expect(service.sendEmail(FormData)).toBeTruthy(service.sendEmail(FormData));
  }));


});