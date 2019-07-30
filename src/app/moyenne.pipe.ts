import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moyenne'
})
export class MoyennePipe implements PipeTransform {

  transform(value: Array<number>): number {
    const nbreValeurs = value.length;
    let somme = 0;
    let moyenne;
    for (let i = 0; i < nbreValeurs; i++){
      somme += value[i];
    }
    moyenne = somme / nbreValeurs;
    return moyenne;
  }
}
