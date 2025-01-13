import { Injectable } from '@angular/core';
import PlantaPost from '../../models/planta/plantaPost';
import PlantaRequert from '../../models/planta/alertas';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private token:string|null;
  constructor() { 
    this.token=localStorage.getItem("token");

  }
  //private apiUrl="http://localhost:8000"
  private apiUrl= "https://challenge-back-2-0.onrender.com";
  /**
   *GET
          Obtener usuario por mail    x
          Obtener plantas por id del usuario x
          Obtener caracteristicas por id de planta x
          Obtener alertas por id de usuario  x
          Obtener paises x
          //--------------------------------------
          POST
          agregar planta  x
          Registrar usuario x 
          //--------------------------------
          PUT 
          modificar plantas (modificar alerta de planta especifica por id)  x
   */

  //---------------------------------------------------------------------------------
  
  ///PUT---------------------------------------------------------------------------

  async modificarPlanta(id_planta:number,planta:PlantaRequert):Promise<any>
  {
    try {
      const url=`${this.apiUrl}/planta/${id_planta}`;
     
      const response = await fetch(url,{
        method:'PUT',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 

        },
        body:JSON.stringify(planta.toBody())
      })
      if (!response.ok) {
        throw new Error('Error en el login');
      }
  
     
     
    } catch (error) {
      throw new Error("error"+error)
    }
  }
  //POST-----------------------------------------------------------------------------

  
  async agregarPlanta(planta:PlantaPost):Promise<any>
  {
    try {
      const url=`${this.apiUrl}/planta/${planta.idUsuario}`;
     
      const response = await fetch(url,{
        method:'POST',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 
        },
        body:JSON.stringify(planta.toBody())
      })
      if (!response.ok) {
        throw new Error('Error en el login');
      }
  
      
    } catch (error) {
      throw new Error("error"+error)
    }
  }
  //GET------------------------------------------------------------------------------
  
  async getPaises():Promise<any>
  {
    try {
      const url=`${this.apiUrl}/pais`;
  

      const response = await fetch(url,{
        method:'GET',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 
        },
    
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
  async getCaracteristicasPorPlanta(id:number):Promise<any>
  {
    try {
      const url=`${this.apiUrl}/planta/caracteristicas/${id}`;
  

      const response = await fetch(url,{
        method:'GET',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 
        },
    
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
    
  async getAlertasPorPlanta(id:number):Promise<any>
  {
    console.log(id)
    try {
      const url=`${this.apiUrl}/planta/alertas/${id}`;
  

      const response = await fetch(url,{
        method:'GET',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 
        },
    
      })
      if (!response.ok) {
        throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
      }
  
      const textResponse = await response.text();
      console.log("Respuesta del servidor (como texto):", textResponse);
      if (textResponse.trim()) {
        const data = JSON.parse(textResponse);
        console.log(data);
        return data;
      } else {
        throw new Error("Respuesta vacía del servidor");
      }
     
    } catch (error) {
      throw new Error("error"+error)
    }
  }

  async getAlertasPorUsuario(id:number):Promise<any>
  {
    try {
      const url=`${this.apiUrl}/planta/alertas/usuario/${id}`;
  

      const response = await fetch(url,{
        method:'GET',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 
        },
    
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

  async getPlantasPorUsuario(id:number):Promise<any>
  {
    try {
      const url=`${this.apiUrl}/planta/plantas/${id}`;
  

      const response = await fetch(url,{
        method:'GET',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 
        },
    
      })
      if (!response.ok) {
       
          const rta = await response.json();  
          throw new Error('Error: ' + JSON.stringify(rta)); 
       
      }
  
      const data = await response.json();
     
      return data;
    } catch (error) {
      throw new Error("error"+error)
    }
  }

  async getUsuarioPorMail(email:string):Promise<any>
  {
    try {
     
      const url=`${this.apiUrl}/usuario/email`;
   
      const body = {
        "email":email
      }

  
      const response = await fetch(url,{
        method:'POST',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` ,
        
        },
        body:JSON.stringify(body)
      })
      if (!response.ok) {
        throw new Error('Error dashboard' );
      }
  
      const data = await response.json();
    
      return data;
    } catch (error) {
      throw new Error("error"+error)
    }
  }

  async getEstandar(id:number):Promise<any>
  {
    try {
      const url=`${this.apiUrl}//${id}`;
  

      const response = await fetch(url,{
        method:'GET',
        headers:
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}` 
        },
    
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
}
