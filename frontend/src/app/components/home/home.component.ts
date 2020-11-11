import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Pago } from 'src/app/models/pago';
import {ApiRest} from '../../services/api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiRest]
})
export class HomeComponent implements OnInit {
  public pagos: Array<Pago>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peticionesService: ApiRest
  ) {
  }

  ngOnInit(): void {
    this._peticionesService.getPagos().subscribe(
      result => {
        this.pagos = result;
        this.convertirFecha();
        this.ordenarLista();
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  redirigir() {
    this._router.navigate(['/addPago']);
  }

  convertirFecha() {
    this.pagos.forEach(pago => {
      pago.fecha = pago.fecha.substr(0, 10)
    });
  }

  ordenarLista() {
    this.pagos.sort((a, b) => {
      if (a.fecha < b.fecha) {
        return 1;
      } else if (a.fecha > b.fecha) {
        return -1;
      }
      return 0;
    })
  }

}
