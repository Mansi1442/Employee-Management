import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  addUserForm!: FormGroup;
  signUpFormSubmitted = false
  showPopup = false;
  isFormSubmitted = false;
  showMsg = false;
  passwordWrong = false;
    constructor(private authenticationService: AuthenticationService , private route: Router,  private formBuilder: FormBuilder) { }



  ngOnInit(): void {


      const PATTERN_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";


      this.addUserForm = this.formBuilder.group({

        email: ['', [Validators.required , Validators.pattern(PATTERN_EMAIL)]],

        password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(15)]]
      });
    }
  submitUser() 
  {
    this.isFormSubmitted = true;
    if (this.addUserForm.valid)
    {
      this.authenticationService.authenticate(this.addUserForm.value)
      .subscribe(result => {
        console.log(this.addUserForm.value);
        console.log(result);
          console.log(result.data);
          if(!result.data) {
            console.log('error');
            this.showMsg = true;
          }
          else{
        if (result.data.password == this.addUserForm.value.password )
        {
          console.log("HELLLOOOO");
          this.route.navigate(['landingpage']);
        } 
        else 
        {
         this.passwordWrong = true  ; 
        }
      }
        
        });
      }
     
  
  }
 
openPopup(){
  this.showPopup= true;
}


  }
