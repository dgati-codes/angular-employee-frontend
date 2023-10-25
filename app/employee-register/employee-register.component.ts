import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {

  employee : Employee = new Employee(0,'',0,'','','');
  message : string = '';

  constructor(private service: EmployeeService){}

  createEmployee(): void{
    this.service.createEmployee(this.employee)
    .subscribe(()=>{
      this.message='Employee created successfully! ';
      this.employee = new Employee(0,'',0,'','','');
    },error=>{
      console.log(error);
      this.message="Sorry! Unable to create employee record. "
    });
  }
}
