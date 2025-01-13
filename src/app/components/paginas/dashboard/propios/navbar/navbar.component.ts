import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() titulo: string = 'Título predeterminado';
  @Input() nombreUsuario: string = 'Juan Rojas';
}
