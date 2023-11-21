import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  constructor(private theForm: FormBuilder, private user: UserService, private rou: Router) { }

  progress: number = 0;
  
  ngOnInit(): void {
    this.updateProgress();
  }
  
  
  updateProgress() {
    const totalFields = 3; // Cambia este valor si añades o quitas campos en el formulario
    const completedFields = Object.values(this.asesoriaForm.controls).filter(control => control.valid).length;
    this.progress = (completedFields / totalFields) * 100;
  }
  
  asesoriaForm: FormGroup = this.theForm.group({
    nombre: ["", [Validators.required, Validators.minLength(3)]],
    precio: ["", [Validators.required, Validators.min(1), Validators.max(999)]],
    desc: ["", [Validators.required, Validators.maxLength(5)]],
    category_id: ["", Validators.required]
  })
  
  validInput(campo: string) {
    return this.asesoriaForm.controls[campo].errors && this.asesoriaForm.controls[campo].touched
  
  }
  
  goodNot() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado',
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  badNot() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Upss, algo salió mal'
    })
  }
  
  
  
  saveData() {
    console.log('Método saveData() llamado');
  if (this.asesoriaForm && this.asesoriaForm.valid) {
    const formData = {
      name: this.asesoriaForm.get('nombre')!.value,
      price: this.asesoriaForm.get('precio')!.value,
      desc: this.asesoriaForm.get('desc')!.value,
      category_id: this.asesoriaForm.get('category_id')?.value
    };
    this.user.addAsesoria(formData).subscribe(
      response => {
        console.log('Producto guardado con éxito');
        // resetear el formulario después de guardar
        this.asesoriaForm.reset();
        this.updateProgress(); // Actualizar progreso después de guardar
        this.goodNot();
        this.rou.navigate(['/home-admin']);
      },
      error => {
        console.error('Error al guardar el producto:', error);
        this.asesoriaForm.reset();
        this.updateProgress();
        this.badNot();
  
      }
    );
  }
  
  }
  
  }
