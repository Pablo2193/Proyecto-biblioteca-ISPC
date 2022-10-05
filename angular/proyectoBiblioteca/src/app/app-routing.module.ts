import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { CatalogoComponent } from './Pages/catalogo/catalogo.component';
import { AgregarComponent } from './Pages/agregar/agregar.component';
import { EditarComponent } from './Pages/editar/editar.component';
import { ConeccionComponent } from './Pages/coneccion/coneccion.component';

const routes: Routes = [
 {path: "", component: AppComponent, pathMatch: "full" },
 {path:"inicio", component: InicioComponent},
 {path:"login", component: LoginComponent},
 {path:"registro", component: RegistroComponent},
 {path:"catalogo", component: CatalogoComponent},
 {path:"agregar", component: AgregarComponent},
 {path:"editar", component: EditarComponent},
 {path:"coneccion", component: ConeccionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
