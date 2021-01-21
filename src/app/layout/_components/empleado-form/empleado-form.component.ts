import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from '../../_models/empleado.interface';
import { EmpleadosService } from '../../../vistas/empleados/empleados.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.scss'],
})
export class EmpleadoFormComponent implements OnInit {
  // empleado: Empleado = null;
  empleado: Empleado = null;
  empleadoForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private empleadoSvc: EmpleadosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.empleado = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.empleado === 'undefined') {
      this.router.navigate(['crear-empleado']);
    } else {
      this.empleadoForm.patchValue(this.empleado);
    }
  }

  guardarEditar(): void {
    // console.log(this.empleadoForm.value);
    if (this.empleadoForm.valid) {
      const empleado = this.empleadoForm.value;
      const empleadoId = this.empleado?.id || null;
      this.empleadoSvc.accionCrear(empleado, empleadoId);
      this.empleadoForm.reset();
    }
  }

  accionRegresar(): void {
    this.router.navigate(['/empleados']);
  }

  esUnCampoValido(campo: string): string {
    const validarCampo = this.empleadoForm.get(campo);
    return (!validarCampo.valid && validarCampo.touched)
      ? 'is-invalid'
      : validarCampo.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.empleadoForm = this.fb.group({
      nombreCompleto: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      ingreso: ['', [Validators.required]],
      tipoDeContrato: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required, Validators.minLength(5)]],
      eps: ['', [Validators.required]],
      arl: ['', [Validators.required]],
      fondoPensiones: ['', [Validators.required]],
    });
  }
}
