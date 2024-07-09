import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessGameComponent } from './guess-game/guess-game.component';



@NgModule({
  declarations: [
    GuessGameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GuessGameComponent]
})
export class GuessGameModule { }
