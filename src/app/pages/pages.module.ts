import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { ProductoComponent } from './producto/producto.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { CreateSucursalComponent } from './sucursal/create-sucursal/create-sucursal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { EditSucursalComponent } from './sucursal/edit-sucursal/edit-sucursal.component';
import { CreateUserComponent } from './usuario/create-user/create-user.component';
import { EditUserComponent } from './usuario/edit-user/edit-user.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    declarations: [
        UsuarioComponent,
        SucursalComponent,
        ProductoComponent,
        CreateSucursalComponent,
        EditSucursalComponent,
        CreateUserComponent,
        EditUserComponent
    ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class PagesModule { }
