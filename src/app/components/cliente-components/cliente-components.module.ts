import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { AlmuerzosComponent } from './almuerzos/almuerzos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { CompraProductoComponent } from './compra-producto/compra-producto.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';

import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentgGuard } from 'src/app/guards/studentg.guard';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [

]

@NgModule({
  declarations: [
    PerfilClienteComponent,
    AlmuerzosComponent,
    BebidasComponent,
    PostresComponent,
    CompraProductoComponent,
    MetodoPagoComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PerfilClienteComponent,
    AlmuerzosComponent,
    BebidasComponent,
    PostresComponent,
    CompraProductoComponent,
    MetodoPagoComponent,
    HomeComponent,
    MenuComponent
  ]
})
export class ClienteComponentsModule { }
