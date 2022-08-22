// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [HttpClientModule,FormsModule,
      ReactiveFormsModule,
      RouterTestingModule.withRoutes([]),
    ],
    providers: [AuthenticationService],
      declarations: [ LoginComponent , LandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBe(component);
  });

  it('should have redirect to landingpage ', () => {
    expect(LandingpageComponent).toBe(LandingpageComponent);
  });
});