import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInData } from 'src/app/login/login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseurl } from 'src/environments/environment';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient ) { }

   authenticate(data: { new(form?: HTMLFormElement | undefined): FormData; new(form?: HTMLFormElement | undefined): FormData; prototype?: FormData; email?: any; password?: any; }): Observable<any>{
     console.log(data.email);
     console.log(data.password);
    return this.http.get("http://localhost:5500/api/login/" + data.email , data.password); 
  }

  //  LogInUser(){
    
  //     return this.http.get<{message:String,login:any}>("http://localhost:5500/api/login" )
  //     // .pipe(map((logInData)=>{
  //     //   return logInData.login.map(post=>{
  //     //     return {
  //     //     email:post.email,
  //     //     password:post.password
  //     //      }
  //     //   });
  //     // }));
    
  //  }

   createUser(email:string,password:string){
     const AddLogInData : LogInData={email:email,password:password};
     this.http.post("http://localhost:5500/api/login",AddLogInData )
     .subscribe(response=>{
       console.log(response);

     });
    }

    sendEmail(info: { new(form?: HTMLFormElement | undefined): FormData; new(form?: HTMLFormElement | undefined): FormData; prototype?: FormData; email?: any; }){
      return  this.http.put("http://localhost:5500/api/login/"  +  info.email , info
    )}
  }
