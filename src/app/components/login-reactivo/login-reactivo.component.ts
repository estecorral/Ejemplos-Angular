import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactivo',
  templateUrl: './login-reactivo.component.html',
  styleUrls: ['./login-reactivo.component.css'],
})
export class LoginReactivoComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.newForm();
  }

  ngOnInit(): void {}

  get usernameInvalid() {
    return (
      this.loginForm.get('username').invalid &&
      this.loginForm.get('username').touched
    );
  }

  get passwordInvalid() {
    return (
      this.loginForm.get('password').invalid &&
      this.loginForm.get('password').touched
    );
  }

  newForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  onSubmit() {
    if(this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach( control => {
        control.markAsTouched();
      })
    }
    console.log(this.loginForm);
  }
}
