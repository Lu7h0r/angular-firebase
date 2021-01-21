import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Empleado } from '../../layout/_models/empleado.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  empleados: Observable<Empleado[]>;

  private empledosCollecction: AngularFirestoreCollection<Empleado>;

  constructor(private readonly afs: AngularFirestore) {
    this, (this.empledosCollecction = afs.collection<Empleado>('empleados'));
    this.accionListar();
  }

  accionEliminar(empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.empledosCollecction.doc(empId).delete();
      } catch (err) {
        reject(err.message);
      }
    });
  }
  accionCrear(empelado: Empleado, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...empelado };
        const result = await this.empledosCollecction.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }
  private accionListar(): void {
    this.empleados = this.empledosCollecction
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Empleado))
      );
  }
}
