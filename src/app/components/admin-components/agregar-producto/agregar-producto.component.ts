import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  selectedFile: File | undefined;
  progress: number = 0;

  constructor(private theForm: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.updateProgress();
  }

  updateProgress() {
    const totalFields = 4; // Cambia este valor si añades o quitas campos en el formulario
    const completedFields = Object.values(this.asesoriaForm.controls).filter(control => control.valid).length;
    this.progress = (completedFields / totalFields) * 100;
  }

  asesoriaForm: FormGroup = this.theForm.group({
    nombre: ["", [Validators.required, Validators.minLength(3)]],
    precio: ["", [Validators.required, Validators.min(1), Validators.max(999)]],
    desc: ["", [Validators.required, Validators.maxLength(25)]],
    category_id: ["", Validators.required],
    image: [null, Validators.required] // Añade el campo para la imagen
  })

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
    this.asesoriaForm.patchValue({ image: file });
  }

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
    if (this.asesoriaForm && this.asesoriaForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      formData.append('name', this.asesoriaForm.get('nombre')!.value);
      formData.append('price', this.asesoriaForm.get('precio')!.value);
      formData.append('desc', this.asesoriaForm.get('desc')!.value);
      formData.append('category_id', this.asesoriaForm.get('category_id')!.value);

      this.userService.addAsesoria(formData).subscribe(
        response => {
          console.log('Producto guardado con éxito');
          this.asesoriaForm.reset();
          this.updateProgress();
          this.goodNot();
          this.router.navigate(['/home-admin']);
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
