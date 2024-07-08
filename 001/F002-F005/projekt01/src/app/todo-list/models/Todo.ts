import { Priority } from "./Priority";

// ha nincs logika (metódusok), csak strutúra, akkor célszerű interface-ben gondolkodni
export interface Todo{
  name: string;
  priority : Priority
}
