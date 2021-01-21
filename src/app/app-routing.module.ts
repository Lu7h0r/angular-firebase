import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'empleados', loadChildren: () => import('./vistas/empleados/lista/lista.module').then(m => m.ListaModule) }, { path: 'crear-empleado', loadChildren: () => import('./vistas/empleados/crear-empleado/crear-empleado.module').then(m => m.CrearEmpleadoModule) }, { path: 'detalle', loadChildren: () => import('./vistas/empleados/detalle/detalle.module').then(m => m.DetalleModule) }, { path: 'editar', loadChildren: () => import('./vistas/empleados/editar/editar.module').then(m => m.EditarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
