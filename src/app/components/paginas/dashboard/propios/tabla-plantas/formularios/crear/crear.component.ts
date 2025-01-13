import { Component, Input } from '@angular/core';
import { DashboardService } from '../../../../../../../service/other/dashboard.service';
import PlantaPost from '../../../../../../../models/planta/plantaPost';

@Component({
  selector: 'app-crear',
  standalone: false,
  
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  @Input() funcion: () => void = () => {}; 
  @Input() cambio: () => void = () => {}; 
  @Input() id_usuario: number=1; 
    paises=[  {
    "icono": "",
    "nombre": "",
    "id": 0
}]
nombre:string|null=null;
id_pais:number=0;

  constructor(private dashboard: DashboardService)
  {

  }

  ngOnInit()
  {
    this.dashboard.getPaises().then((data)=>{
      this.paises=data;
      console.log(data)
    })
  }
  crear(): void{
 
    if(this.id_pais!==0 && this.nombre!==null)
    {
      

      const plantap= new PlantaPost(this.nombre,this.id_pais,this.id_usuario);
      this.dashboard.agregarPlanta(plantap).then(()=>
      {
        this.cambio();
        this.cerrar();
      }).catch((err)=>{
        console.log("error"+ err)
      })
      console.log("terminado");
    }else
    {
      console.log("algo no esta")
    }
  }

  cerrar(): void{
    
    this.funcion()
  }
}
