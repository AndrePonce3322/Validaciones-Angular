import { Component } from '@angular/core'

@Component({
    selector: 'app-bienvenida',
    templateUrl: './bienvenida.component.html',
    styleUrls: ['./bienvenida.component.css']
})

export class bienvenidaComponent{
    public nombre: String;  

    constructor(){
        this.nombre = "Andre"
    }
}