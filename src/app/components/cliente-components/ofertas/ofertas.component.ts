import { Component } from '@angular/core';
import { CompraProductoComponent } from '../compra-producto/compra-producto.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {

  constructor(public dialog: MatDialog) { }

  openModal() {
    const dialogRef = this.dialog.open(CompraProductoComponent, {
      // width: '80%', // Ajusta el ancho del modal según tus necesidades
      // maxWidth: '100px', // Establece el ancho máximo del modal
      maxHeight: '90vh', // Establece la altura máxima del modal
      data: { /* Puedes pasar datos adicionales al modal si es necesario */ }
    });
  }
}