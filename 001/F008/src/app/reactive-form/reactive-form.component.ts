import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common'

// ha rekatív űrlapot szeretnék készíteni, akkor a ReactiveFormsModule-t be kell hívni
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  empForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    ssnId: new FormControl(),
    birthDate: new FormControl(),
    sex: new FormControl(),
    maritalStatus: new FormControl()
  });


  // ezt hívjuk az űrlap beküldésekor
  submit(){
    console.log(this.empForm);
  }

  /*
  c(controlName : string){
    return this.empForm.controls?[controlName];
  }*/
}
