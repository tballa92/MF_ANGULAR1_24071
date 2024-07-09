import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  @Output('todoCreated') // kívülről a todoCreated eseményre lehet feliratkozni eseménykezelővel
  created = new EventEmitter<Todo>(); // midne outoput evenEmitter, a generikus paraméter mondja meg, hogy milyen típusú adatot akarok visszaküldeni
  // később az emit hívással lehet az eseményt kiváltani

  // az osztály publikus elemi hozzáférhetőek a sablonban, viszont
  // a sablonban felépíett dom közvetlenül nem kezelhető az osztályban
  // v1) sablonban template változókon keresztül kiolvassuk az aktuális adattartalmat
  //     és paraméterként megkapja a függvény
  addTodo(todoName : string, prioNumber : string){
    //console.log(todoName); console.log(prioNumber);
    //todoName = 'kiskutya'; // egyirányú kötés volt a nézet -> osztály között

    let newTodo : Todo = {
      name: todoName,
      priority: parseInt(prioNumber)
    }
    this.created.emit(newTodo);

  }

  // v2) felveszek egy segédmezőt, amiben tárolom a teendő nevét
  todoName: string = 'kiskutya';
  // a segédmezőt tulajdonságkötéssel kötöm az űrlap mezőjéhez
   addTodo2(){
    console.log(this.todoName); // [] kötés estén nem változik a mező értéke, hiszen ez a kötés osztály -> nézet között valósul meg

  }
}
