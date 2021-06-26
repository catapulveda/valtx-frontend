import {Component, OnInit} from '@angular/core';
import {ColumnTable} from '../../shared/components/table/column-table';
import {Sucursal} from '../../core/interfaces/sucursal';
import {Observable, of} from 'rxjs';
import {SucursalService} from '../../core/services/sucursal.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateSucursalComponent} from './create-sucursal/create-sucursal.component';
import {EditSucursalComponent} from './edit-sucursal/edit-sucursal.component';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss']
})
export class SucursalComponent {

  columnas: ColumnTable[] = [
    {name: 'COD', property: 'codigoSucursal', visible: true, isModelProperty: true},
    {name: 'NOMBRE', property: 'nombre', visible: true, isModelProperty: true},
    {name: '', property: 'actions', isModelProperty: false, visible: true}
  ];

  sucursales: Sucursal[] = [];

  constructor(
    private service: SucursalService,
    public dialog: MatDialog
  ) {
    this.list();
  }

  list(): void {
    this.service.getSucursales().subscribe(value => {
      this.sucursales = value;
    });
  }

  edit(sucursal: Sucursal): void {
    this.dialog.open(EditSucursalComponent, {
      width: '480px', autoFocus: true, disableClose: true, data: sucursal
    }).afterClosed().subscribe(value => {
      if (value) {
        this.list();
      }
    });
  }

  delete(rowValue: Sucursal): void {
    this.service.deleted(rowValue.codigoSucursal);
    this.sucursales = this.sucursales.filter(value => value.codigoSucursal !== rowValue.codigoSucursal);
  }

  create(): void {
    this.dialog.open(CreateSucursalComponent, {
      width: '480px', autoFocus: true, disableClose: true
    }).afterClosed().subscribe(value => {
      if (value) {
        this.list();
      }
    });
  }
}
