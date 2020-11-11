import {Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import {ApiRest} from '../../services/api-rest.service';

@Component({
  selector: 'app-cuadrante',
  templateUrl: './cuadrante.component.html',
  styleUrls: ['./cuadrante.component.css'],
  providers: [ApiRest]
})

export class CuadranteComponent implements OnInit {
  public users: Array<Usuario>;
  public cuadrante: any[] = new Array();

  constructor(
    private _peticionesService: ApiRest
  ) {
  }

  ngOnInit(): void {
    this._peticionesService.getUsers().subscribe(
      result => {
        this.users = result;
        this.calcularCuadrante();
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  calcularCuadrante() {
    let suma = 0;
    let positivos: any[] = new Array();
    let negativos: any[] = new Array();
    this.users.forEach(user => {
      suma += user.gasto;
    });
    let dividendo = suma / this.users.length;
    this.users.forEach(user => {
      let deuda = (user.gasto - dividendo);
      if (deuda > 0) {
        positivos.push({user, deuda});
      } else {
        negativos.push({user, deuda});
      }
    });
    this.calcularT(positivos, negativos);
  }

  calcularT(positivos, negativos) {
    let pago: number;
    let i_negativo = 0;
    let i_positivo = 0;
    while (i_negativo < negativos.length) {
      let nombreEmisor = negativos[i_negativo].user.name;
      let nombreReceptor = positivos[i_positivo].user.name;
      if ((negativos[i_negativo].deuda * -1) < positivos[i_positivo].deuda) {
        pago = negativos[i_negativo].deuda * -1;
        positivos[i_positivo].deuda += negativos[i_negativo].deuda;
        i_negativo += 1;
      } else if ((negativos.deuda * -1) == positivos[i_positivo].deuda) {
        pago = negativos[i_negativo].deuda * -1;
        i_positivo += 1;
        i_negativo += 1;
      } else {
        pago = positivos[i_positivo].deuda;
        negativos[i_negativo].deuda += positivos[i_positivo].deuda;
        i_positivo += 1;
      }
      this.cuadrante.push({
        nombreEmisor: nombreEmisor,
        nombreReceptor: nombreReceptor,
        pago: pago.toFixed(2)
      });
    }
  }


}
