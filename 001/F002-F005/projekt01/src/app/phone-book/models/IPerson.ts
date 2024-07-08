// mivel használni szeretném a Sex típust ebben az állományban, ezért importálom 
// a definíciót a megfelelő fájlból 
import { Sex } from "./Sex";

// interface: leírja a felületet (impl. nem tartalmaz)
export interface IPerson{
    name : string; // kötelező a név és string típus
    birthDate : Date; // kötelező a születési idő és dátum típus 
    sex : Sex; // kötelező a nem tárolására (lehetséges érték: Sex.MALE, Sex.FEMALE)
}