import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { CollectionComponent } from './shared/collection/collection.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './inter/Header.Interceptor';
import { CityComponent } from './pages/city/city.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    SliderComponent,
    CollectionComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    MyAccountComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgImageSliderModule
  ],
  providers : [
    { provide : HTTP_INTERCEPTORS, useClass : HeaderInterceptor, multi : true }
  ]
})
export class UserModule { }
