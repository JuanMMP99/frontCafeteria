import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-producto',
  templateUrl: './compra-producto.component.html',
  styleUrls: ['./compra-producto.component.css']
})
export class CompraProductoComponent {

  showFloatingWindow = true;

  constructor(public dialog: MatDialog, private router: Router) { }

  openModal() {
    const dialogRef = this.dialog.open(CompraProductoComponent, {
      width: '80%', // Ajusta el ancho del modal según tus necesidades
      maxWidth: '600px', // Establece el ancho máximo del modal
      maxHeight: '90vh', // Establece la altura máxima del modal
      data: { /* Puedes pasar datos adicionales al modal si es necesario */ }
    });
  }


  navigateAndClose(): void {
    const route = '/metodo-pago';

    // Navega a la ruta específica
    this.router.navigateByUrl(route);

    // Cierra la ventana flotante
    this.showFloatingWindow = false;
  }
}