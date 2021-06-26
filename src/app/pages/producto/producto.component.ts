import { Component, OnInit } from '@angular/core';
import {ColumnTable} from '../../shared/components/table/column-table';
import {Sucursal} from '../../core/interfaces/sucursal';
import {SucursalService} from '../../core/services/sucursal.service';
import {MatDialog} from '@angular/material/dialog';
import {Producto} from '../../core/interfaces/producto';
import {ProductoService} from '../../core/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  columnas: ColumnTable[] = [
    {name: 'COD', property: 'codigoProducto', visible: true, isModelProperty: true},
    {name: 'NOMBRE', property: 'nombre', visible: true, isModelProperty: true},
    {name: 'PRECIO', property: 'precio', visible: true, isModelProperty: true},
    {name: '', property: 'actions', isModelProperty: false, visible: true}
  ];

  productos: Producto[] = [];

  constructor(
    private service: ProductoService,
    public dialog: MatDialog
  ) {
    this.list();
  }

  list(): void {
    this.service.getProductos().subscribe(value => {
      this.productos = value;
    });
  }

  create() {

  }

  edit(rowValue: any) {

  }

  delete(rowValue: any) {

  }
}
