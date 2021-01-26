import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validator } from "@angular/forms";
@Component({
  selector: 'app-login-plantilla',
  templateUrl: './login-plantilla.component.html',
  styleUrls: ['./login-plantilla.component.css']
})
export class LoginPlantillaComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {
      Object.values(form.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(form);
  }
}
