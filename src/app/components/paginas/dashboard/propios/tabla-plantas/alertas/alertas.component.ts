import { Component, Input, SimpleChanges } from '@angular/core';
import { DashboardService } from '../../../../../../service/other/dashboard.service'; 

@Component({
  selector: 'app-alertas',
  standalone: false,
  
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.css'
})
export class AlertasComponent {
  @Input() control:boolean=false;
  @Input() id_usuario=1;
  lecturas:number=0;
  medias:number=0;
  rojas:number=0;
  desabilitados:number=0;
  constructor(private dashboard: DashboardService)
  {
    
  }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes['control']) {
        this.lecturas=0;
        this.medias=0;
        this.rojas=0;
        this.desabilitados=0;
        this.cargarTodas()
      }
    }
  
 

    async cargarTodas() {
      await this.cargar();
    }
    
    async cargar() {
     await this.dashboard.getAlertasPorUsuario(this.id_usuario).then((data)=>{
      this.rojas=data.roja;
      this.medias=data.media;
      this.lecturas=data.lectura;
      this.desabilitados=data.desabilitados;
     })
    }
  
}
