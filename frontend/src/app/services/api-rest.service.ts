import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiRest {
  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = "http://localhost:8080/"
  }


  getUsers(): Observable<any> {
    return this._http.get(this.url + 'usuarios');
  }

  getPagos(): Observable<any> {
    return this._http.get(this.url + 'pagos');
  }

  addUser(user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'usuario', params, {headers: headers});
  }

  addPago(pago):
    Observable<any> {
    let params = JSON.stringify(pago);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'pago', params, {headers: headers});
  }
}
