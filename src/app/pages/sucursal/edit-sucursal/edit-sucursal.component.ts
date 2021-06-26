import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SucursalService} from '../../../core/services/sucursal.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Sucursal} from '../../../core/interfaces/sucursal';

@Component({
  selector: 'app-edit-sucursal',
  templateUrl: './edit-sucursal.component.html',
  styleUrls: ['./edit-sucursal.component.scss']
})
export class EditSucursalComponent {

  fg: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public sucursal: Sucursal,
    private fb: FormBuilder,
    private service: SucursalService,
    public dialogRef: MatDialogRef<EditSucursalComponent>
  ) {
    this.fg = this.fb.group({
      codigoSucursal: [null, [Validators.required]],
      nombre: [null, [Validators.required]]
    });
    this.fg.setValue(sucursal);
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.fg.controls;
  }

  edit(): void {
    this.service.edit(this.sucursal.codigoSucursal, this.fg.value).subscribe(value => {
      this.dialogRef.close(value);
    });
  }
}
