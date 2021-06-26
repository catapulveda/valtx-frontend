import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuario} from '../interfaces/usuario';
import {Sucursal} from '../interfaces/sucursal';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  endpoint = environment.backend + '/usuarios';

  constructor(
    private http: HttpClient
  ) {
  }

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.endpoint);
  }

  public delete(id: string): void {
    this.http.delete(this.endpoint + `/${id}`).subscribe();
  }

  public edit(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.endpoint + `/${id}`, usuario);
  }

  public insert(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.endpoint, usuario);
  }
}
