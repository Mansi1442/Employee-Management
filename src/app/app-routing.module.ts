
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

const routes: Routes = [
  {path:'forgotpass',component:ForgotpassComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SignupComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutComponent,canActivate:[AuthGuard]},
  {path :'contact',component:ContactComponent,canActivate:[AuthGuard]},
  {path:'news',component : NewsComponent,canActivate:[AuthGuard]},
  {path: 'landingpage', component: LandingpageComponent, canActivate: [AuthGuard] },
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {  }
