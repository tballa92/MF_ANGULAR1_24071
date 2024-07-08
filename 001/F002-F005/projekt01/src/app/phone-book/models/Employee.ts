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

}