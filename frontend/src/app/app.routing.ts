import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AddUsuarioComponent} from './components/add-usuario/add-usuario.component';
import {BalanceComponent} from './components/balance/balance.component';
import {CuadranteComponent} from './components/cuadrante/cuadrante.component';
import {HomeComponent} from './components/home/home.component';
import {AddPagoComponent} from './components/add-pago/add-pago.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addUsuario', component: AddUsuarioComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'cuadrante', component: CuadranteComponent},
  {path: 'addPago', component: AddPagoComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
