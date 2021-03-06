import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../domain/cliente';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClienteService {

  constructor(private http : HttpClient) { }

  getCliente() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>('https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/clientes')
  }

}