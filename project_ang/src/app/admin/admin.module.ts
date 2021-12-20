import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryComponent } from './pages/category/category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentAddEditComponent } from './pages/student-add-edit/student-add-edit.component';
import { ImagesComponent } from './pages/images/images.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ProductBoxComponent } from './shared/product-box/product-box.component';
import { MyFormComponent } from './shared/my-form/my-form.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductsComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    AddProductComponent,
    StudentComponent,
    StudentAddEditComponent,
    ImagesComponent,
    DiscountPipe,
    ProductBoxComponent,
    MyFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
