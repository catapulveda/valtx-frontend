import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SucursalService} from '../../../core/services/sucursal.service';
import {Sucursal} from '../../../core/interfaces/sucursal';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-sucursal',
  templateUrl: './create-sucursal.component.html',
  styleUrls: ['./create-sucursal.component.scss']
})
export class CreateSucursalComponent {

  fg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: SucursalService,
    public dialogRef: MatDialogRef<CreateSucursalComponent>
  ) {
    this.fg = this.fb.group({
      codigoSucursal: [null, [Validators.required]],
      nombre: [null, [Validators.required]]
    });
  }

  create(): void {
    const sucursal: Sucursal = this.fg.value;
    this.service.insert(sucursal).subscribe(value => {
      this.dialogRef.close(value);
    });
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.fg.controls;
  }
}
