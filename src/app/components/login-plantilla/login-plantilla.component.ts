import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validator } from "@angular/forms";
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-plantilla',
  templateUrl: './login-plantilla.component.html',
  styleUrls: ['./login-plantilla.component.css']
})
export class LoginPlantillaComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {
      Object.values(form.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    this.authService.login(this.usuario).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/home');
    }, (error) => {
      console.log(error);
    });
  }
}
