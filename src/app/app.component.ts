import { Component } from '@angular/core';

@Component({
  selector: 'aplicacion',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '¡Funcionando!';
  nombre = 'Daniel';
  apellido = 'Núñez';
  visible = false;
  enlace = 'http://www.elblogdedani.com';
  decirAdios() {
    if(this.visible == true) this.visible = false;
    else this.visible = true;
  }
}
