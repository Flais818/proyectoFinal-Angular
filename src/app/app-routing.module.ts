import { NgModule, ElementRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'crud', component: CrudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
