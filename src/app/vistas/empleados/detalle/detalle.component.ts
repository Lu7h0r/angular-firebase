import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Empleado } from '../../../layout/_models/empleado.interface';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  empleado: Empleado = null;

  constructor(private router: Router, private empleadoSvc: EmpleadosService) {
    const navigation = this.router.getCurrentNavigation();
    this.empleado = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.empleado === 'undefined') {
      this.router.navigate(['empleados']);
    }
  }

  accionEditar(): void {
    this.navigationExtras.state.value = this.empleado;
    this.router.navigate(['editar'], this.navigationExtras);
  }
  async accionEliminar(): Promise<void> {
    try {
      await this.empleadoSvc.accionEliminar(this.empleado.id);
      alert('eliminado');
      this.accionRegresar()
    } catch (err) {
      console.log(err);
    }
  }
  accionRegresar(): void {
    this.router.navigate(['/empleados']);
  }
}
