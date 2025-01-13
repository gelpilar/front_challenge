import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl="http://localhost:8000"
   //private apiUrl= "https://challenge-back-2-0.onrender.com";

  constructor() { }

  async register(email:string,contra:string,nombre:string):Promise<any>
  {
    try {
      const url=`${this.apiUrl}/auth/register`;
      const body = {
        "email":email,
        "nombre":nombre,
        "contra":contra
      }

      const response = await fetch(url,{
        method:'POST',
        headers:
        {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(body)
      })
      if (!response.ok) {
        throw new Error('Error en el login');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("error"+error)
    }
  }

  async login(email:string,contra:string):Promise<any>
  {
   

    try {
      const url=`${this.apiUrl}/auth/login`;
      const body = {
        "email":email,
        "contra":contra
      }

      const response = await fetch(url,{
        method:'POST',
        headers:
        {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(body)
      })
      if (!response.ok) {
        throw new Error(`Error en el login: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (data.token) {
        localStorage.setItem("token", data.token);
        return { status: "success", message: "Login successful" };
      } else {
        throw new Error("No se recibió un token válido");
      }
    } catch (error) {
      throw new Error("error"+error)
    }
  }
}
