
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Pages/login/login.component";
import { RegistroComponent } from "./Pages/registro/registro.component";

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: ' ', component: AppComponent, pathMatch: 'full' },
  {path:'login', component: LoginComponent, pathMatch: 'full' },
  {path:'registro', component: RegistroComponent, pathMatch: 'full' },
 ];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


