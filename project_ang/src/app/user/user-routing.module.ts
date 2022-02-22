import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { BackdoorGuard } from './guard/backdoor.guard';
import { AntiBackdoorGuard } from './guard/anti-backdoor.guard';
import { CityComponent } from './pages/city/city.component';


const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children : [
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "contact",
        component : ContactComponent
      },
      {
        path : "signup",
        component : SignupComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "login",
        component : LoginComponent,
        canActivate : [AntiBackdoorGuard]
      },
      {
        path : "my-account",
        component : MyAccountComponent,
        canActivate : [BackdoorGuard]
      },
      {
        path : "city",
        component : CityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
