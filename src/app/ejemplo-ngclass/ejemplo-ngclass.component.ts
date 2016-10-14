import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-ngclass',
  templateUrl: './ejemplo-ngclass.component.html',
  styleUrls: ['./ejemplo-ngclass.component.css']
})
export class EjemploNgclassComponent implements OnInit {

  texto: string =  "SI";
  estadoPositivo: boolean = true;

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo; 
  }

  ngOnInit() {
  }

}
