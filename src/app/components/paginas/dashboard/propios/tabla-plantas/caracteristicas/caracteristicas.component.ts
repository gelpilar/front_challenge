import { Component, Input, SimpleChanges } from '@angular/core';
import { DashboardService } from '../../../../../../service/other/dashboard.service';

@Component({
  selector: 'app-caracteristicas',
  standalone: false,
  
  templateUrl: './caracteristicas.component.html',
  styleUrl: './caracteristicas.component.css'
})
export class CaracteristicasComponent {
  caracteristicas:Array<any>=[];
  @Input() id_caracteristicas=1;

constructor(private dashboard: DashboardService)
{
  
}
 
ngOnChanges(changes: SimpleChanges): void {
  if (changes['id_caracteristicas']) {
    
    this.obtener(); 
  }
}
ngOnInit()
{
  this.obtener()
}
obtener()
{
  this.dashboard.getCaracteristicasPorPlanta(this.id_caracteristicas).then((carac)=>{
    console.log(carac)
    this.caracteristicas= carac;
  })
}
}
