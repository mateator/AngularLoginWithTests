import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get('https://623c57ad7efb5abea67f30ab.mockapi.io/employees');
  }
}
