import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearEmpleadoComponent } from './crear-empleado.component';

const routes: Routes = [{ path: '', component: CrearEmpleadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearEmpleadoRoutingModule { }
