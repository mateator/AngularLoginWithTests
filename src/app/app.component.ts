import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      toggle: new FormControl(false),
    });
  }

  login(form: FormGroup) {
    //triggeo el invalid visual de los inputs si no se introducen datos
    form.markAllAsTouched();

    console.log(form.valid ? "FORM OK" : "FORM NOT OK");
    console.log("email: " + form.value.email + " --- password: " + form.value.password + " --- toggle: " + form.value.toggle);
  }
}
