import { Component, ElementRef, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-almuerzos',
  templateUrl: './almuerzos.component.html',
  styleUrls: ['./almuerzos.component.css']
})
export class AlmuerzosComponent implements OnInit{
  products: any[] = [];

  constructor(private productService: UserService) { }

  ngOnInit(): void {
    this.getProductsByCategory();
  }

  getProductsByCategory() {
    const categoryId = 1; // Aquí se define el ID de la categoría que deseas mostrar
    this.productService.getProductsByCategory(1).subscribe(
      (data: any) => {
        this.products=data.products;
        console.log(data);
        // this.products = data; // Asigna los productos obtenidos al arreglo local
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
