import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import('./user/user.module').then(u=>u.UserModule)
  },
  {
    path : "admin",
    loadChildren : ()=> import('./admin/admin.module').then(a=>a.AdminModule)
  },
  {
    path : "**",
    redirectTo : "admin",
    pathMatch : "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration : 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
