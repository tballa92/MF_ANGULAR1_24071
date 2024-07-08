import { Pipe, PipeTransform } from '@angular/core';
import { Sex } from './models/Sex';

// létrehozom rá (feldíszítem)a  Pipe dekorátor
@Pipe({
  name: 'sex', // elnevezem a pipe-ot, így tudok rá sablonból hivatkozni
  pure: true // pure pipe: nem tárol, csak kimenet rendel a bemenethez, a pure pipeok utolsó értékét cache-li az Angular, így csak akkor hívjuk meg, ha tényleges adatváltozás volt
})
export class SexPipe implements PipeTransform { // implementálni kell a PipeTransform
  // 1. paraméter a forrásadat, utána felhasználó arg. és visszatérési érték a formázott tartalom
  transform(value: Sex, ...args: unknown[]): unknown {
    if(value == Sex.MALE) return "férfi";
    else return "nő";
  }

}
