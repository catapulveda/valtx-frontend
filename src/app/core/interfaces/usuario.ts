import {Sucursal} from './sucursal';

export interface Usuario {
  codigoUsuario: string;
  nombre: string;
  usuario: string;
  password: string;
  sucursal: Sucursal;
}
