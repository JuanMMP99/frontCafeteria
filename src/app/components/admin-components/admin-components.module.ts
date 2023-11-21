import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerfilAdminComponent,
    AgregarProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminComponentsModule { }
