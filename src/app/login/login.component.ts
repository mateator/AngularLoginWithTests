import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }
  loginForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;
  ngOnInit(): void {
    this.loginForm = this.setUpForm({ email: "", password: "" });
  }

  login(form: FormGroup) {
    //empleo un boolean para no mostrar los errores de validación cuando carga la página
    this.isSubmitted = true;

    console.log(form.valid ? "FORM OK" : "FORM NOT OK");

    if (form.valid) {
      this.loginService.login(form).subscribe((data: any) => {
        if (data.credentials) {
          this.router.navigate(['/home']);
        }
      });
    }
  }

  setUpForm(data: User) {
    return new FormGroup({
      email: new FormControl(data.email, [Validators.required, Validators.pattern('.{1,}[@]{1}.{1,}[.]{1}.{2,}')]),
      password: new FormControl(data.password, Validators.required),
      toggle: new FormControl(false),
    });
  }
}

