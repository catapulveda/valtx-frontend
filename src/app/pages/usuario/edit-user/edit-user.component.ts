import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Sucursal} from '../../../core/interfaces/sucursal';
import {UsuarioService} from '../../../core/services/usuario.service';
import {SucursalService} from '../../../core/services/sucursal.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Usuario} from '../../../core/interfaces/usuario';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {

  fg: FormGroup;
  sucursales: Sucursal[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario,
    private fb: FormBuilder,
    private service: UsuarioService,
    public sucursalService: SucursalService,
    public dialogRef: MatDialogRef<EditUserComponent>
  ) {
    this.fg = this.fb.group({
      codigoUsuario: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      password: [null],
      sucursal: [null, [Validators.required]]
    });

    this.sucursalService.getSucursales().subscribe(value => {
      this.sucursales = value;
    });

    console.log(usuario);
    this.fg.setValue(usuario);
    this.controls.sucursal.setValue(this.usuario.sucursal.codigoSucursal);
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.fg.controls;
  }

  edit(): void {
    const usuario: Usuario = this.fg.value;
    usuario.sucursal = {codigoSucursal: this.controls.sucursal.value, nombre: null};
    this.service.edit(this.usuario.codigoUsuario, usuario).subscribe(value => {
      this.dialogRef.close(value);
    });
  }

}
