import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-principal-ingreso',
  standalone: false,
  
  templateUrl: './pagina-principal-ingreso.component.html',
  styleUrl: './pagina-principal-ingreso.component.css'
})
export class PaginaPrincipalIngresoComponent {
  texto:string="¡Si aun no tiene una cuenta registrese!"
  log:boolean=true;

  cambio():void{
    this.log=!this.log;
    if(this.log===false)
    {
      this.texto="Si ya tiene una cuenta inicie sesión"
    }else
    {
      this.texto="¡Si aun no tiene una cuenta registrese!"
    }
  }
}
