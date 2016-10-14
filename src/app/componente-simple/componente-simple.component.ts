import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-simple',
  templateUrl: './componente-simple.component.html',
  styleUrls: ['./componente-simple.component.css']
})
export class ComponenteSimpleComponent implements OnInit {

  dato = "Creando componentes para DesarrolloWeb.com";
  
  claseTitular: string = "class1";
  
  cambiaEstado() { 
    this.claseTitular = "class2"
  }

  constructor() { }

  ngOnInit() {
  		console.log('componente inicializado...');
  }

}
