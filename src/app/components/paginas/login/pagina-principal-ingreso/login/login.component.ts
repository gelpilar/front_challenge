import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../../service/auth/authentication.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  opcion:string="password";
  email:string ="";
  pass:string="";
  datos:string="";
  emailvalidator:boolean=false;
  errorvalidator:boolean=false;
 
  contravalidator:boolean=false;
  constructor(private servicioLogin:AuthenticationService,private router:Router){
  }


  cambiaropcion():void{
    this.opcion = this.opcion === "password" ? "text" : "password";
  }


  log():void
  {
   
    this.emailvalidator=false;
    this.contravalidator=false;
    this.errorvalidator=false;
    if(this.email.trim()!=="" && this.pass.trim()!=="")
    {
      this.servicioLogin.login(this.email,this.pass).then((rta)=>{
  
        if(rta.status==="success")
        {
          
          this.router.navigate(["/dashboard"],{state:{"email":this.email}})
        }
      }).catch(
        (err)=>{
          console.error("Error al obtener datos:",err);
          this.errorvalidator=!this.errorvalidator;
        }
      )
    }
    
    if(this.email.trim()==="")
    {      this.emailvalidator=!this.emailvalidator;
    }
    if(this.pass.trim()==="")
      {      this.contravalidator=!this.contravalidator;
      }
    
  }
}
