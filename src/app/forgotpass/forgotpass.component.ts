
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';



@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.sass']
})
export class ForgotpassComponent implements OnInit {
  emailMsg =false;
  emailErrorMsg = false;
  isEmailSubmit = false;
  addEmailForm!: FormGroup;
  
    constructor(private authenticationService: AuthenticationService , private route: Router,  private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    const PATTERN_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";


      this.addEmailForm = this.formBuilder.group({

        email: ['', [Validators.required , Validators.pattern(PATTERN_EMAIL)]]

       
      });

  }

  submitEmail()
  {
    this.isEmailSubmit = true;
    
    if(this.addEmailForm.valid)
    {
    this.authenticationService.sendEmail(this.addEmailForm.value)
    .subscribe(response =>{
      console.log(this.addEmailForm.value);
      console.log("&&",response);
      // console.log(response.data);
       if(response == false){
        this.emailErrorMsg = true 
        }
       else {
         if( response = this.addEmailForm.value)
          {
            this.emailMsg = true;
          }
          else{

          }
       }
    });
    }
    else
    {
      console.log('####')
    }
  }



  }


