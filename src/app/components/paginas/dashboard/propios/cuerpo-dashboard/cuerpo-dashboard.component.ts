import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../../../../service/other/dashboard.service';
import Usuario from '../../../../../models/usuarios/user';

@Component({
  selector: 'app-cuerpo-dashboard',
  standalone: false,
  
  templateUrl: './cuerpo-dashboard.component.html',
  styleUrl: './cuerpo-dashboard.component.css'
})
export class CuerpoDashboardComponent {
@Input() email:string=""
  user:any={nombre:""};
  loading: boolean = true;
  constructor(private router: Router,private dashboard:DashboardService) { 
   
  }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  async obtenerUsuario()
  {
    
      await this.dashboard.getUsuarioPorMail(this.email).then((user)=>
      {
        if (user?.id && user?.email && user?.nombre) {
          const newUser = new Usuario(user.id, user.email, user.nombre);
          this.user = newUser;
        }else
        {
          console.log("error")
        }
      }).catch((err)=>{
        console.log("error" + err)
      }).finally(()=>{
        this.loading=!this.loading;
      });
      
    
  }
}
