
export default class PlantaPost
{
    private nombre:string;
    private id_pais:number;
    private id_usuario:number;

    constructor(nombre:string,id_pais:number,id_usuario:number)
    {
        this.nombre=nombre;
        this.id_pais=id_pais;
        this.id_usuario=id_usuario;

    }
    
 

    toBody()
    {
        const body={
            "nombre":this.nombre,
            "id_pais":this.id_pais

        }
        return body;
    }
    get idUsuario()
    {
        return this.id_usuario;
    }
}