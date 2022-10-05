import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './Layout/Layout.component';
import { NavComponent } from './Layout/nav/nav.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { PagesComponent } from './Pages/Pages.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';

import { CatalogoComponent } from './Pages/catalogo/catalogo.component';
import { ConeccionComponent } from './Pages/coneccion/coneccion.component';

import { InicioComponent } from './Pages/inicio/inicio.component';
import { AgregarComponent } from './Pages/agregar/agregar.component';
import { EditarComponent } from './Pages/editar/editar.component';

import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [		
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    LayoutComponent,
    PagesComponent,
    CatalogoComponent,
    ConeccionComponent, 
    InicioComponent,
    AgregarComponent,
    EditarComponent
   ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
   ],
  
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
