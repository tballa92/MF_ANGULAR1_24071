import { Component } from '@angular/core';
import { ReactiveFormsModule, AbstractControl, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common'
import { between, ssn } from '../ssn.validator';

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
    ssnId: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]*'), ssn]), // kötelező, 9 karakterből áll, csak számjegyeket tartlmazhat + CDV kód
    birthDate: new FormControl(),
    sex: new FormControl(),
    maritalStatus: new FormControl(),
    age: new FormControl('', [Validators.required, between(1,100)])
  });


  // ezt hívjuk az űrlap beküldésekor
  submit(){
    console.log(this.empForm);
  }



  c(controlName : string) : any{
    return this.empForm.controls[controlName as keyof object];
  }
}
