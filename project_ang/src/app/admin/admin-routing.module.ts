import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryComponent } from './pages/category/category.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentAddEditComponent } from './pages/student-add-edit/student-add-edit.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component: DashboardComponent
      },
      {
        path : "product",
        component : ProductsComponent
      },
      {
        path : "category",
        component : CategoryComponent
      },
      {
        path : "product/add",
        component : AddProductComponent
      },
      {
        path : "student",
        component : StudentComponent
      },
      {
        path : "student/add",
        component : StudentAddEditComponent
      },
      {
        path : "student/edit/:id",
        component : StudentAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
