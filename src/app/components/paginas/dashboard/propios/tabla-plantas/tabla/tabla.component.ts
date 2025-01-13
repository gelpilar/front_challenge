import { Component, Input, SimpleChanges } from '@angular/core';
import { DashboardService } from '../../../../../../service/other/dashboard.service';
import PlantaRequert from '../../../../../../models/planta/alertas';
import plantaConsulta from '../../../../../../models/planta/plantaconsultas';
import PlantaConsulta from '../../../../../../models/planta/plantaconsultas';

@Component({
  selector: 'app-tabla',
  standalone: false,
  
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  @Input() control:boolean=false;
  @Input() funcioncambio:()=>void=()=>{}
  @Input() cambioId:(id:number)=>void=(id:number)=>{}
  @Input() cambioIdCaracteristicas:(id:number)=>void=(id:number)=>{}

  @Input() id: number = 0;
  selectedId: number = 1;
  color:boolean=false;
  
  id_planta:number=0;
  
  
  elementos: PlantaConsulta[] = [];

  constructor(private dashboard: DashboardService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      const currentId = changes['id'].currentValue;
      if (currentId !== undefined && currentId !== 0) {
        console.log('Nuevo valor de id:', currentId);  
        this.obtener(currentId);  
      } else {
        console.log('El id es inválido o no está definido.');
      }
    }
    if (changes['control']) {
      this.obtener(this.id);  
    }
  }

  cambioCelda(id:number)
  {

    this.selectedId = id;
    this.cambioIdCaracteristicas(id);
  }
  async obtener(id:number)
  {
   
    if(id!==0)
    {
      
      await this.dashboard.getPlantasPorUsuario(id).then((data)=>{
        console.log(data)
        const rta: Array<any> = data as Array<any>;
        const arreglo: Array<PlantaConsulta> = [];
        rta.forEach((elemento)=>
        {
          arreglo.push(new PlantaConsulta(elemento.id,elemento.nombre,elemento.id_pais,elemento.id_usuario,elemento.nombre_pais,elemento.icono_pais,elemento.roja,elemento.lectura,elemento.media,elemento.desabilitados));
          console.log("elemento");
        })
        this.elementos=arreglo;
      }).catch((err)=>{
        console.log("error"+err)
      });
    }
   
  }

  cambio(id:number)
  {
    console.log(id)
    this.funcioncambio();
    this.cambioId(id);
   
  }
}
