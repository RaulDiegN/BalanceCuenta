import {Component, OnInit} from '@angular/core';
import {Pago} from '../../models/pago';
import {Usuario} from '../../models/usuario';
import {ApiRest} from '../../services/api-rest.service';

@Component({
  selector: 'app-add-pago',
  templateUrl: './add-pago.component.html',
  styleUrls: ['./add-pago.component.css'],
  providers: [ApiRest]
})
export class AddPagoComponent implements OnInit {
  public users: Array<Usuario>;
  public pago: Pago;

  constructor(
    private _peticionesService: ApiRest
  ) {
    this.pago = new Pago(null,"", "", "", 0)

  }

  ngOnInit(): void {
    this._peticionesService.getUsers().subscribe(
      result => {
        this.users = result;
        console.log(this.users);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form) {
    const auxUser = this.users.find(user => user.name == this.pago.name_user)
    if (!auxUser) {
      alert("Ese usuario no está en la base de datos")
      return;
    }
    if (this.pago.importe <= 0) {
      alert("El importe debe ser mayor que 0")
      return;
    }
    this.pago.id_user = auxUser.id_user
    this._peticionesService.addPago(this.pago).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(<any>error);
      }
    );
    form.reset();
  }

}
