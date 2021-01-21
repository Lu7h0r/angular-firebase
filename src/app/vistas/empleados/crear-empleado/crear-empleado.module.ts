import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearEmpleadoRoutingModule } from './crear-empleado-routing.module';
import { CrearEmpleadoComponent } from './crear-empleado.component';
import { EmpleadoFormModule } from '../../../layout/_components/empleado-form/empleado-form.module';


@NgModule({
  declarations: [CrearEmpleadoComponent],
  imports: [
    CommonModule,
    CrearEmpleadoRoutingModule, 
    EmpleadoFormModule
  ]
})
export class CrearEmpleadoModule { }
