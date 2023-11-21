import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { SobreNosotrosComponent } from './shared/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponentsModule } from './components/cliente-components/cliente-components.module';
import { AdminComponentsModule } from './components/admin-components/admin-components.module';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AgregarProductoComponent } from './components/admin-components/agregar-producto/agregar-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeAdminComponent,
    HomeClienteComponent,
    RegistroComponent,
    LoginComponent,
    PaginaErrorComponent,
    SobreNosotrosComponent,
    ContactoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterLink,

    // Importa los modulos de Cliente y Admin
    ClienteComponentsModule,
    AdminComponentsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
