import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, TemplateRef, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ColumnTable} from './column-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnChanges {

  @Input() columns: ColumnTable[];
  @Input() data: any[];

  @Input()
  columnActions: TemplateRef<any>;

  // tslint:disable-next-line:typedef
  get visibleColumns() {
    // @ts-ignore
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  dataSource: MatTableDataSource<any> | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // @ts-ignore
    if (this.dataSource.paginator) {
      // @ts-ignore
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
      // @ts-ignore
      this.dataSource.paginator = this.paginator;
      // @ts-ignore
      this.dataSource.sort = this.sort;
    }
  }

  /*
  * @Param element Refers to JSON Object for each row of the Table
  * @Param idColumn Refers to Key or Keys to access the value in 'element'
  */
  getValue(element: JSON, idColumn: string): string {
    const split: string[] = idColumn.split('.');
    let textValue = '';
    if (split.length > 1) {
      let jsonObject = element;
      split.forEach((item) => {
        jsonObject = jsonObject[item];
      });
      textValue = String(jsonObject || '');
    } else {
      textValue = element[split[0]];
    }
    return textValue;
  }
}
