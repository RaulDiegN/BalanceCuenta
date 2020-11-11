import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {routing, appRoutingProviders} from './app.routing'

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BalanceComponent} from './components/balance/balance.component';
import {AddPagoComponent} from './components/add-pago/add-pago.component';
import {AddUsuarioComponent} from './components/add-usuario/add-usuario.component';
import {CuadranteComponent} from './components/cuadrante/cuadrante.component';
import {HomeComponent} from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BalanceComponent,
    AddPagoComponent,
    AddUsuarioComponent,
    CuadranteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
