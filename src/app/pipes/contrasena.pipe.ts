import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, estado: boolean ): string {
    /*let element:string;
    if(estado){
        for (let index = 0; index < value.length; index++) {
          element = element+'*';
        }
    }
    if(!estado){
      element = value;
    }*/
    return (estado) ? '*'.repeat(value.length) : value;
  }

}
