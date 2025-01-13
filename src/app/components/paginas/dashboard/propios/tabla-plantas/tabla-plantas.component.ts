import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-plantas',
  standalone: false,
  
  templateUrl: './tabla-plantas.component.html',
  styleUrl: './tabla-plantas.component.css'
})
export class TablaPlantasComponent {
  @Input() cambioAlerta:()=>void=()=>{};
  validatorCreate:boolean=false;
  id_planta:number=0;
  id_seleccionada:number=0;
  
  @Input() id_user:number=0;
  control:boolean=true;

  //---------
  validatorModif:boolean=false;
  //------------------
  constructor(){}

  modificar=():void=>
  {

    this.validatorModif=!this.validatorModif;
  }

  cambioIdCaracteristicas=(id:number):void=>
    {
  
      this.id_seleccionada=id;
      
    }
  cambiarId=(id:number):void=>
  {
    this.id_planta=id;
  }
 
  crear()
  {
    this.validatorCreate=true;
  }
  cerrarC=():void =>
  {
  
    this.control=false;
    this.validatorCreate=false;
  }
 
  cambioHecho=():void =>
  {
    
      this.control=!this.control;
      this.cambioAlerta();

    }
}
