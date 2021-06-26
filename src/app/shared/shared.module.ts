import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './components/table/table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }
