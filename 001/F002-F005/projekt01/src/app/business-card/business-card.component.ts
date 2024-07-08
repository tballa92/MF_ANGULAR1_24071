import { Component } from '@angular/core';

@Component({
  selector: 'app-business-card',
  standalone: true, // standalone komponens, azaz nem tartozik modulhoz -> közvetlenül importál és ez a komponens közvetlenül importálható
  // a standalone közvetlenül importálja a szükséges elemeket (már a legalapabb elemeket is)
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})
export class BusinessCardComponent {

}
