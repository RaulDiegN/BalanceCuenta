import {Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import {ApiRest} from '../../services/api-rest.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  providers: [ApiRest]
})
export class BalanceComponent implements OnInit {
  public users: Array<Usuario>;

  constructor(
    private _peticionesService: ApiRest
  ) {
  }

  ngOnInit(): void {
    this._peticionesService.getUsers().subscribe(
      result => {
        this.users = result;
        this.calcularBalance();
        console.log(result)
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  calcularBalance() {
    let suma = 0;
    this.users.forEach(user => {
      suma += user.gasto;
    });
    let dividendo = suma / this.users.length;
    this.users.forEach(user => {
      user.gasto = +((user.gasto - dividendo).toFixed(2));
    });
  }

}
