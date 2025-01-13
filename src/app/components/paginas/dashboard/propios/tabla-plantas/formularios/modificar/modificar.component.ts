import { Component, Input } from '@angular/core';
import PlantaPost from '../../../../../../../models/planta/plantaPost';
import { DashboardService } from '../../../../../../../service/other/dashboard.service';
import PlantaRequert from '../../../../../../../models/planta/alertas';

@Component({
  selector: 'app-modificar',
  standalone: false,
  
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent {
  @Input() funcion: () => void = () => {}; 
  @Input() cambio: () => void = () => {}; 
  @Input() id_planta:number=1;
    paises=[  {
    "icono": "",
    "nombre": "",
    "id": 0
}]

id_pais:number=0;
nombrePais:string="";
nombre:string= "";
cantidadLecturas: number=0;
cantidadDeshabilitados: number=0;

alertasMedias: number=0;
alertasRojas: number=0;




  constructor(private dashboard: DashboardService)
  {

  }

  ngOnInit()
  {
    this.dashboard.getAlertasPorPlanta(this.id_planta).then((data)=>{
      this.alertasMedias=data.media;
      this.alertasRojas=data.roja;
      this.cantidadDeshabilitados=data.desabilitados;
      this.cantidadLecturas=data.lectura;
    })
    
  }
  cerrar()
  {
    this.funcion();
  }

  crear()
  {
    this.dashboard.modificarPlanta(this.id_planta,new PlantaRequert(this.alertasRojas,this.cantidadLecturas,this.alertasMedias,this.cantidadDeshabilitados
     
    )).then(()=>{
      this.cambio();
      this.cerrar();
    }).catch((err)=>{ console.log(err)}) }
      
  
    /*
    this.dashboard.PutPlanta(this.id_planta,this.id_pais,this.nombre,this.alertasMedias,this.alertasRojas,this.cantidadDeshabilitados,this.cantidadLecturas).then((data)=>{
      if(typeof data === 'number')
      {
        
        this.cambio();
        this.cerrar();
      }*/
    }

