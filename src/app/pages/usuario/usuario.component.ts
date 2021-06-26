import { Component } from '@angular/core';
import {ColumnTable} from '../../shared/components/table/column-table';
import {Usuario} from '../../core/interfaces/usuario';
import {UsuarioService} from '../../core/services/usuario.service';
import {MatDialog} from '@angular/material/dialog';
import {EditUserComponent} from './edit-user/edit-user.component';
import {CreateUserComponent} from './create-user/create-user.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  columnas: ColumnTable[] = [
    {name: 'COD', property: 'codigoUsuario', visible: true, isModelProperty: true},
    {name: 'NOMBRE', property: 'nombre', visible: true, isModelProperty: true},
    {name: 'USUARIO', property: 'usuario', visible: true, isModelProperty: true},
    {name: 'SUCURSAL', property: 'sucursal.nombre', visible: true, isModelProperty: true},
    {name: '', property: 'actions', isModelProperty: false, visible: true}
  ];

  usuarios: Usuario[] = [];

  constructor(
    public dialog: MatDialog,
    private service: UsuarioService
  ) {
    this.list();
  }

  edit(usu: Usuario): void {
    this.dialog.open(EditUserComponent, {
      width: '480px', autoFocus: true, disableClose: true, data: usu
    }).afterClosed().subscribe(value => {
      if (value) {
        this.list();
      }
    });
  }

  delete(rowValue: Usuario): void {
    this.service.delete(rowValue.codigoUsuario);
    this.usuarios = this.usuarios.filter(value => value.codigoUsuario !== rowValue.codigoUsuario);
  }

  private list(): void {
    this.service.getUsuarios().subscribe(value => {
      this.usuarios = value;
    });
  }

  create(): void {
    this.dialog.open(CreateUserComponent, {
      width: '480px', autoFocus: true, disableClose: true
    }).afterClosed().subscribe(value => {
      if (value) {
        this.list();
      }
    });
  }
}
