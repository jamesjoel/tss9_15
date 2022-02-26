import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';

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
import { MyDirDirective } from './directives/my-dir.directive';
import { FilterPipe } from './pipe/filter.pipe';


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
    MyFormComponent,
    MyDirDirective,
    FilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ]
})
export class AdminModule { }
