"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
// osztályt kiterjesztünk (extends), interface-t implementálunk (implements)
class Employee {
    constructor(name, birthDate, sex, ssn, email) {
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
exports.Employee = Employee;
