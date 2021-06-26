import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {UsuarioService} from '../../../core/services/usuario.service';
import {SucursalService} from '../../../core/services/sucursal.service';
import {Sucursal} from '../../../core/interfaces/sucursal';
import {Usuario} from '../../../core/interfaces/usuario';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  fg: FormGroup;
  sucursales: Sucursal[] = [];
  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    public sucursalService: SucursalService,
    public dialogRef: MatDialogRef<CreateUserComponent>
  ) {
    this.fg = this.fb.group({
      codigoUsuario: [null, [Validators.required]],
      nombre: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      password: [null, [Validators.required]],
      sucursal: [null, [Validators.required]]
    });

    this.sucursalService.getSucursales().subscribe(value => {
      this.sucursales = value;
    });
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.fg.controls;
  }

  create(): void {
    const usuario: Usuario = this.fg.value;
    this.service.insert(usuario).subscribe(value => {
      this.dialogRef.close(value);
    });
  }
}
