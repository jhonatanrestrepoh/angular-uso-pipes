import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre                  :string    = "Capitán América";
  nombre2                 :string    = "jhOnaTan David ReStrEpo hEnAO";
  numeros                 :number [] = [1,2,3,4,5,6,7,8,9];
  PI                      :number    = Math.PI;
  porcentaje              :number    = 0.235;
  salario                 :number    = 1234.5;
  fecha                   :Date      = new Date;
  idioma                  :string    = 'es';
  mostrarOcultarContrasena:boolean   = true;
  videoUrl                :string    = "https://www.youtube.com/embed/lsZGj8qDwGY";
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llegó la data');
    }, 4500);
  });
  heroe = {
    nombre   : 'Logan',
    clave    : 'Wolverine',
    edad     :  500,
    direccion: {
      calle  : '89',
      numero : '49b',
      casa   : '29'
    }
  };
  idiomaEs(){
    this.idioma = 'es';
  }
  idiomaFr(){
    this.idioma = 'fr';
  }
  idiomaEn(){
    this.idioma = 'en';
  }
}
