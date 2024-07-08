import { IPerson } from "./IPerson";
import { Sex } from "./Sex";

// osztályt kiterjesztünk (extends), interface-t implementálunk (implements)
export class Employee implements IPerson{
    // mivel egyik végén sincs ? ezért mindne mezőnek a létrehozás pillanatában értéket
    // kell kapni (v1: beállítok itt valamit, v2: a konstruktorban állítjuk be)
    name: string;
    birthDate: Date;
    sex: Sex;
    // továbbfejlesztés: saját mezők hozzáadása
    ssn: string;
    email: string;
    phones: string[];

    constructor(name : string, birthDate : Date, sex : Sex, ssn: string, email: string) {
        // mindig amikor a példány mezőjéről/metódusáról beszélek az osztályon belül,
        // akkor this. refrencia
        this.name = name;
        this.birthDate = birthDate;
        this.sex = sex;
        this.ssn = ssn;
        this.email = email;
        this.phones = [];
    }


    checkSsn() : {status: boolean, msg: string}{
      // 9 karakterből áll
      if(this.ssn.length != 9)
        return {status: false, msg: 'A TAJ 9 számjegyből áll!'};
      if(isNaN(Number(this.ssn)))
        return {status: false, msg: 'A TAJ csak számjegyeket tartalmazhat!'};

      let letters = [...this.ssn]; // karakter tömböt készítek
      let sum = 0;
      for(let i = 0; i < letters.length - 1; i++){
        sum += parseInt(letters[i]) * (i % 2 == 0 ? 3 : 7);
      }
      if(sum % 10 != parseInt(letters[letters.length - 1]))
        return {status: false, msg: 'CDV kód helyetelen!'};

      return {status: true, msg: ''};
    }

}
