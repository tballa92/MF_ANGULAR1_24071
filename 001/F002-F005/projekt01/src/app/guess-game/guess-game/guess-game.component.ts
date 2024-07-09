import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-game',
  templateUrl: './guess-game.component.html',
  styleUrl: './guess-game.component.css'
})
export class GuessGameComponent implements OnInit{
  @Input({required: true, alias: 'min'})
  min! : number; // legkisebb generálható

  @Input({required: true, alias: 'max'})
  max! : number; // ez a legnagyobb generálható

  number : number = 0; // ebbe fogom tárolni a gondolt számot
  labels : number[] = [];  // itt tárolom a még tippelhető számokat
  private generateNumber(){
    this.number = Math.floor(Math.random() * (this.max - this.min + 1))
  }
  private generateLabels(){
    this.labels = [];
    for(let i = this.min; i <= this.max; i++)
      this.labels.push(i);
    console.log(this.min);
    console.log(this.max);
  }

  constructor(){
    /* az input értékek ekkor még nem állnak rendelkezésre
    this.generateNumber();
    this.generateLabels();
    console.log(this.labels);
    */
  }

  // a logikai inicializálást a onInit életciklus eseményben célszerű elvégezni
  // 1) implementálom az interfacet
  // 2) megvalósítom a megfelelő metódust
  ngOnInit(): void {
    this.generateNumber();
    this.generateLabels();
  }

  lastGuess? : number; // ebbe tárolom az utolsó tippet (? -> kezdetben undefined)
  buttonClick(n : number){
    this.labels = this.labels.filter(l => l != n);
    this.lastGuess = n;
  }
}
