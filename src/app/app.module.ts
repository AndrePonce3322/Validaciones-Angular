import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { bienvenidaComponent } from './bienvenida/bienvenida.component'
import { EmpleadosComponent } from './Empleados/empleados.component'

@NgModule({
  declarations: [
    AppComponent,
    bienvenidaComponent,
    EmpleadosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
