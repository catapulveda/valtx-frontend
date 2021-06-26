import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component';
import {SucursalComponent} from './sucursal/sucursal.component';
import {ProductoComponent} from './producto/producto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'sucursales',
    component: SucursalComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
