import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Sucursal} from '../interfaces/sucursal';
import {Producto} from '../interfaces/producto';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  endpoint = environment.backend + '/productos';

  constructor(
    private http: HttpClient
  ) {
  }

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.endpoint);
  }
}
