import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  standalone: false,
  
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
  @Input() primero:number=0;
  @Input() segundo:number=0;
  @Input() tercero:number=0;
  @Input() nombre:string="defecto";
}
