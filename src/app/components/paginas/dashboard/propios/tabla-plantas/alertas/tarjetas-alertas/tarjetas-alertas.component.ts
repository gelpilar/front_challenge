import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas-alertas',
  standalone: false,
  
  templateUrl: './tarjetas-alertas.component.html',
  styleUrl: './tarjetas-alertas.component.css'
})
export class TarjetasAlertasComponent {
  @Input() numero:number=0;
  @Input() titulo: string = 'Tarjeta';
    
}
