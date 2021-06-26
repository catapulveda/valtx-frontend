import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sucursal} from '../interfaces/sucursal';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  endpoint = environment.backend + '/sucursal';

  constructor(
    private http: HttpClient
  ) {
  }

  public insert(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.endpoint, sucursal);
  }

  public getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.endpoint);
  }

  public deleted(id: string): void {
    this.http.delete(this.endpoint + `/${id}`).subscribe();
  }

  public edit(id: string, sucursal: Sucursal): Observable<Sucursal> {
    return this.http.put<Sucursal>(this.endpoint + `/${id}`, sucursal);
  }

}
