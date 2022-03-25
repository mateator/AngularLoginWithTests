import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Employee } from 'src/models/Employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employeeInput= new FormControl();
  employeeList: Employee[] = [{email:'',phone:'',job:'',fullname:'',id:0, image:''}];
  employeeListFiltered: Employee[] = [{email:'',phone:'',job:'',fullname:'No se han podido cargar los datos',id:1,image:'https://picsum.photos/id/'}];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data: any)=>{

      //esta iteracción map no es necesaria, pero con esto consigo mejores mock images de la api
      data.map((dato:any)=>{
        dato.id= parseInt(dato.id) +10;
      })

      this.employeeList = data;
      this.employeeListFiltered = data;
    })
  }

  filterEmployees(filtro: string){
    //realizamos la comparación en minúsculas asignandolo a otro array para poder filtrarlo repetidas veces
    this.employeeListFiltered = this.employeeList.filter(employee => employee.fullname.toLowerCase().includes(filtro.toLowerCase()));
  }

}
