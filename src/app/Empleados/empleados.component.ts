import { Component } from '@angular/core'

@Component({
    selector: 'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css']
})

export class EmpleadosComponent{

    // Insertando los datos del input recibiendo un dato String y enviandolo
    InsertarDatos(nombre: string){}
    InsertarDatosEdad(edad: string){}
    InsertarDatosGenero(genero: string){}
    InsertarDatosIdentidad(identidad: string){}
    InsertarDatosEmpresa(empresa: string){}
}