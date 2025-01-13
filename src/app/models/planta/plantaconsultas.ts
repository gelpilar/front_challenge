export default class PlantaConsulta {
    private id:number;
    private nombre: string;
    private id_pais: number;
    private id_usuario: number;
    private nombre_pais: string;
    private icono_pais: string;
    private roja: number;
    private lectura: number;
    private media: number;
    private desabilitados: number;
  
    constructor(
      id:number,
      nombre: string,
      id_pais: number,
      id_usuario: number,
      nombre_pais: string,
      icono_pais: string,
      roja: number,
      lectura: number,
      media: number,
      desabilitados: number
    ) {
      this.id=id;
      this.nombre = nombre;
      this.id_pais = id_pais;
      this.id_usuario = id_usuario;
      this.nombre_pais = nombre_pais;
      this.icono_pais = icono_pais;
      this.roja = roja;
      this.lectura = lectura;
      this.media = media;
      this.desabilitados = desabilitados;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    public getIdPais(): number {
      return this.id_pais;
    }
  
    public setIdPais(id_pais: number): void {
      this.id_pais = id_pais;
    }
  
    public getIdUsuario(): number {
      return this.id_usuario;
    }
  
    public setIdUsuario(id_usuario: number): void {
      this.id_usuario = id_usuario;
    }
  
    public getNombrePais(): string {
      return this.nombre_pais;
    }
  
    public setNombrePais(nombre_pais: string): void {
      this.nombre_pais = nombre_pais;
    }
  
    public getIconoPais(): string {
      return this.icono_pais;
    }
  
    public setIconoPais(icono_pais: string): void {
      this.icono_pais = icono_pais;
    }
  
    public getRoja(): number {
      return this.roja;
    }
  
    public setRoja(roja: number): void {
      this.roja = roja;
    }
    public getId(): number {
        return this.id;
      }
    
      public setId(id: number): void {
        this.id = id;
      }
  
    public getLectura(): number {
      return this.lectura;
    }
  
    public setLectura(lectura: number): void {
      this.lectura = lectura;
    }
  
    public getMedia(): number {
      return this.media;
    }
  
    public setMedia(media: number): void {
      this.media = media;
    }
  
    public getDesabilitados(): number {
      return this.desabilitados;
    }
  
    public setDesabilitados(desabilitados: number): void {
      this.desabilitados = desabilitados;
    }
  }
  