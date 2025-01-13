import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../../../service/other/dashboard.service';
import Usuario from '../../../../models/usuarios/user';

@Component({
  selector: 'app-pagina-principar-dashboard',
  standalone: false,
  
  templateUrl: './pagina-principar-dashboard.component.html',
  styleUrl: './pagina-principar-dashboard.component.css'
})
export class PaginaPrinciparDashboardComponent implements OnInit{
  email:string=""
  user:any={nombre:""};
  loading: boolean = true;
  constructor(private router: Router,private dashboard:DashboardService) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['email']) {
      this.email = navigation.extras.state['email'];
    } 
  }

  ngOnInit(): void {
    
  }

 
}
