import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../../service/auth/authentication.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorvalidator:boolean=false;
  opcion:string="password";
  email:string ="";
  pass:string="";
  nombre:string="";
  datos:string="";
  emailvalidator:boolean=false;
  contravalidator:boolean=false;
  nombrevalidaror:boolean=false;
  alertaRegistro:boolean=false;

  constructor(private servicioRegister:AuthenticationService){}
  cambiaropcion():void{
    this.opcion = this.opcion === "password" ? "text" : "password";
  }

  register():void
  {
    this.emailvalidator=false;
    this.contravalidator=false;
    this.errorvalidator=false;
    this.nombrevalidaror=false;
    this.alertaRegistro=false;
    if(this.email.trim()!==""&& this.pass.trim()!=="" && this.nombre.trim()!=="")
    {
      this.servicioRegister.register(this.email,this.pass,this.nombre).then((data)=>{
        this.alertaRegistro=true;
        console.log(data)
      }).catch((err)=>{
        console.log("error de registro"+err);
        this.errorvalidator=!this.errorvalidator;
      });

    }
 if(this.email.trim()==="")
    {      this.emailvalidator=!this.emailvalidator;
    }
    if(this.pass.trim()==="")
      {      this.contravalidator=!this.contravalidator;
      }
      if(this.nombre.trim()==="")
        {      this.nombrevalidaror=!this.nombrevalidaror;
        }
    }
  
}
