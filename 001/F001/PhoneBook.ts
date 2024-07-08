import { IPerson } from "./IPerson";


export class PhoneBook<T extends IPerson>{
    people : T[]; // T típusú és annak leszármazottjai is elhelyezhetők (aki egyben IPerson leszármazott is) 

    constructor(){
        this.people = [];
    }

    // !! publikáltam a people-t, ezért a hozzáadás és szűrés majd kívülről valósul meg !!


}