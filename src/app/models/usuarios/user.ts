export default class Usuario
{
    private id:number;
    private email:string;
    private nombre:string;

    constructor(id:number,email:string,nombre:string)
    {
        this.email=email;
        this.id=id;
        this.nombre=nombre;
    }
    public getId(): number {
        return this.id;
      }
    
      public setId(id: number): void {
        this.id = id;
      }
    
      public getEmail(): string {
        return this.email;
      }
    
      public setEmail(email: string): void {
        this.email = email;
      }
    
      public getNombre(): string {
        return this.nombre;
      }
    
      public setNombre(nombre: string): void {
        this.nombre = nombre;
      }

}