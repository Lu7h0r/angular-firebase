import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  empleados$ = this.empleadosSvc.empleados;

  fakeData = [
    {
      nombreCompleto: 'Juan Manuel Gomez',
      email: 'jgomez@test.com',
      ingreso: '16 abril 2019',
      tipoDeContrato: 'Temporal',
      numeroDocumento: '1000248327',
      eps: 'SURA',
      arl: 'AXXA Colpatria',
      fondoPensiones: 'Colfondos',
    },
    {
      nombreCompleto: 'Lizeth Lozano',
      email: 'llozano@test.com',
      ingreso: '16 junio 2020',
      tipoDeContrato: 'Directo',
      numeroDocumento: '1000278327',
      eps: 'SURA',
      arl: 'AXXA Colpatria',
      fondoPensiones: 'Colfondos',
    },
    {
      nombreCompleto: 'Angela Orjuela',
      email: 'aorjuela@test.com',
      ingreso: '16 septiembre 2019',
      tipoDeContrato: 'Directo',
      numeroDocumento: '1000278321',
      eps: 'CAFAM',
      arl: 'AXXA Colpatria',
      fondoPensiones: 'Colpensiones',
    },
    {
      nombreCompleto: 'Manuel Pedraza',
      email: 'mpedraza@test.com',
      ingreso: '7 enero 2020',
      tipoDeContrato: 'Directo',
      numeroDocumento: '1000328327',
      eps: 'SISBEN',
      arl: 'Ninguna',
      fondoPensiones: 'Ninguna',
    },
  ];

  constructor(private router: Router, private empleadosSvc: EmpleadosService) {}

  ngOnInit(): void {}

  accionEditar(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['editar'], this.navigationExtras);
  }
  accionVer(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['detalle'], this.navigationExtras);
  }
  async accionEliminar(empId: string): Promise<void> {
    try {
      await this.empleadosSvc.accionEliminar(empId)
      alert('eliminado');
    }
    catch(err){
      console.log(err);
      
    }
  }
}
