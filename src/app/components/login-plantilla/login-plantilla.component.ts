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
    console.log(form.value, this.login.email);
  }
}
