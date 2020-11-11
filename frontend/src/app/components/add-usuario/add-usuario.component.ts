import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../models/usuario';
import {ApiRest} from '../../services/api-rest.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css'],
  providers: [ApiRest]
})
export class AddUsuarioComponent implements OnInit {
  public users: Array<Usuario>;
  public user: Usuario;

  constructor(
    private _peticionesService: ApiRest
  ) {
    this.user = new Usuario(null, "", 0)
  }

  ngOnInit(): void {
    this._peticionesService.getUsers().subscribe(
      result => {
        this.users = result;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(form) {
    const name = this.users.find(user => user.name == this.user.name)
    if (name) {
      alert("Ese usuario está en la base de datos")
      return;
    }
    this._peticionesService.addUser(this.user).subscribe(
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
