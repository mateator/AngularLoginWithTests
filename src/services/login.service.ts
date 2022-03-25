import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(form:FormGroup){
    return this.http.post('https://623c57ad7efb5abea67f30ab.mockapi.io/login', {email: form.value.email , password : form.value.password});
  }

}
