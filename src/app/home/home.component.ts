import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isSubmitted : boolean = false;
  ngOnInit(): void {
    this.loginForm = this.setUpForm({email:"",password:""});
  }

  login(form: FormGroup) {
    //empleo un boolean para no mostrar los errores de validación cuando carga la página
    this.isSubmitted= true;
    //triggeo el invalid visual de los inputs si no se introducen datos
    form.markAllAsTouched();

    console.log(form.valid ? "FORM OK" : "FORM NOT OK");
    console.log("email: " + form.value.email + " --- password: " + form.value.password + " --- toggle: " + form.value.toggle);
  }

  setUpForm(data: User){
    return new FormGroup({
      email: new FormControl(data.email, [Validators.required, Validators.pattern('.{1,}[@]{1}.{1,}[.]{1}.{2,}')]),
      password: new FormControl(data.password, [Validators.required, Validators.minLength(5)]),
      toggle: new FormControl(false),
    });
  }
}

