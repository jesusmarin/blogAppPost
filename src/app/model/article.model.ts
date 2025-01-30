export interface Article {
  id:number;
  titulo: string;
  fecha_publicacion: string;
  autor: string;
  contenido: {
    /*subtitulos: {
      texto: string;
      parrafos: {
        // ...
      }[];
    }[];*/
  };
}

export interface parragraph {
  type: string;//parrfos
  texto: string;
  content:String
}
