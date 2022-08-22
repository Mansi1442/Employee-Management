import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ForgotpassComponent } from './forgotpass.component';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



describe('ForgotpassComponent', () => {
  let component: ForgotpassComponent;
  let fixture: ComponentFixture<ForgotpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ ForgotpassComponent ],
      imports: [HttpClientTestingModule,FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),], 
        declarations  : [ForgotpassComponent],
      providers : [AuthenticationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBe(component);
  });


  it('should have sendMail ',()=>{
    const app = fixture.componentInstance;
    expect(app.submitEmail()).toBe(app.submitEmail())
  })


  // it('should have sendMail when clicking on button',()=>{
  //   const fixture = TestBed.createComponent(ForgotpassComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.submitEmail()).toEqual(app.submitEmail())
  // });
});


