import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalIngresoComponent } from './components/paginas/login/pagina-principal-ingreso/pagina-principal-ingreso.component';
import { PaginaPrinciparDashboardComponent } from './components/paginas/dashboard/pagina-principar-dashboard/pagina-principar-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/paginas/login/pagina-principal-ingreso/login/login.component'; 
import { RegisterComponent } from './components/paginas/login/pagina-principal-ingreso/register/register.component';
import { TablaPlantasComponent } from './components/paginas/dashboard/propios/tabla-plantas/tabla-plantas.component'; 
import { TablaComponent } from './components/paginas/dashboard/propios/tabla-plantas/tabla/tabla.component';
import { CrearComponent } from './components/paginas/dashboard/propios/tabla-plantas/formularios/crear/crear.component'; 
import { ModificarComponent } from './components/paginas/dashboard/propios/tabla-plantas/formularios/modificar/modificar.component';
import { AlertasComponent } from './components/paginas/dashboard/propios/tabla-plantas/alertas/alertas.component'; 
import { CaracteristicasComponent } from './components/paginas/dashboard/propios/tabla-plantas/caracteristicas/caracteristicas.component';
import { CuerpoDashboardComponent } from './components/paginas/dashboard/propios/cuerpo-dashboard/cuerpo-dashboard.component';
import { MenyIzquierdaComponent } from './components/paginas/dashboard/propios/meny-izquierda/meny-izquierda.component';
import { MenuIzquierdaComponent } from './components/paginas/dashboard/propios/menu-izquierda/menu-izquierda.component';
import { NavbarComponent } from './components/paginas/dashboard/propios/navbar/navbar.component';
import { TarjetasComponent } from './components/paginas/dashboard/propios/tabla-plantas/caracteristicas/tarjetas/tarjetas.component';
import { TarjetasAlertasComponent } from './components/paginas/dashboard/propios/tabla-plantas/alertas/tarjetas-alertas/tarjetas-alertas.component'; 
const routes: Routes = [
  { path: '', component: PaginaPrincipalIngresoComponent },
  { path: 'dashboard', component: PaginaPrinciparDashboardComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalIngresoComponent,
    PaginaPrinciparDashboardComponent,
    LoginComponent,
    RegisterComponent,
    TablaPlantasComponent,
    TablaComponent,
    CrearComponent,
    ModificarComponent,
    AlertasComponent,
    CaracteristicasComponent,
    CuerpoDashboardComponent,
    MenyIzquierdaComponent,
    MenuIzquierdaComponent,
    NavbarComponent,
    TarjetasComponent,
    TarjetasAlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
