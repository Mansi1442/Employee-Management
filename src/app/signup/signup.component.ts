import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  addUserForm!: FormGroup;
  signUpFormSubmitted = false
  showPopup = false;
  isFormSubmitted = false;
    constructor(private authenticationService: AuthenticationService , private route: Router,  private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    const PATTERN_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";


      this.addUserForm = this.formBuilder.group({

        email: ['', [Validators.required , Validators.pattern(PATTERN_EMAIL)]],

        password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(15)]]
      });

  }

  signUpUser() 
  {
    this.isFormSubmitted = true;
    if (this.addUserForm.valid)
    {
     
      this.authenticationService.createUser(this.addUserForm.value.email,this.addUserForm.value.password)
       
      this.route.navigate(['login']);
    }
  
 }

}

