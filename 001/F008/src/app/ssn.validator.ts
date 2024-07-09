import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function ssn(control : AbstractControl) : ValidationErrors | null{
  // Hiba esetén a validátor nevét mint kulcs szerepeltetjük egy true értékkkel
  // és ehhez még további kulcs-érték párokat is adhatunk.
  // portoljuk át a tegnapi ssn validációt ide ( + msg kulcs, ami tartalmazza a hibaüzentet)
  // 9 karakterből áll
  let ssn = control.value;

  if(ssn.length != 9)
    return {ssn: true, msg: 'A TAJ 9 számjegyből áll!'};

  if(isNaN(Number(ssn)))
    return {ssn: true, msg: 'A TAJ csak számjegyeket tartalmazhat!'};

  let letters = [...ssn]; // karakter tömböt készítek
  let sum = 0;
  for(let i = 0; i < letters.length - 1; i++){
    sum += parseInt(letters[i]) * (i % 2 == 0 ? 3 : 7);
  }
  if(sum % 10 != parseInt(letters[letters.length - 1]))
    return {ssn: true, msg: 'CDV kód helyetelen!'};

  //return {status: true, msg: ''};
  return null; // nincs hiba, nem adok vissza üzenetet
}

// between validátor készítése, amely paraméterben kap két számot,
// és eldönti, hogy a control értéke eközött van-e
// 1. fgv -> fogadja a paramétereket és visszaad egy validálásra alkalmas függvénykifejezést
export function between(min: number, max: number) : ValidatorFn{
  return function(control : AbstractControl) : ValidationErrors | null{
    let value = control.value;
    let numberValue = Number(value);

    if(isNaN(numberValue)) return {between: {msg: 'A mező értéke nem szám!'}};
    if(numberValue < min) return {between: {msg: 'A mező értéke kisebb, mint a minium érték!', min: min}}
    if(numberValue > max) return {between: {msg: 'A mező értéke nagyobb, mint a maxium érték!', max: max}}

    return null;
  }
}
