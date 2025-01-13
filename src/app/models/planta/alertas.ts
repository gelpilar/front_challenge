export default class PlantaRequert{
    private  roja:number;
    private  lectura:number;
    private  media:number;
    private desabilitados:number;

    constructor(roja:number,lectura:number,media:number,desabilitados:number)
    {
        this.roja=roja;
        this.lectura=lectura;
        this.media=media;
        this.desabilitados=desabilitados;
    }

    toBody()
    {
        return {
            "roja":this.roja,
            "lectura":this.lectura,
            "media":this.media,
            "desabilitados":this.desabilitados
        }
    }
}