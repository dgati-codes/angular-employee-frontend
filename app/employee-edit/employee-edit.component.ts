import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {

  employee : Employee = new Employee(0,'',0,'','','');
  message : string = '';
  constructor(private service: EmployeeService, 
             private activatedRoute: ActivatedRoute,
             private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe(
      data => {
        this.employee=data;
      },error =>{
        console.log(error);
        this.router.navigate(['list']);
        
      }
    );
  }

  updateEmployee(){
    this.service.updateEmployee(this.employee).subscribe(
      data => {
        console.log(data);
      this.router.navigate(['list']);
      }, error =>{
        console.log(error);
        
      }
    );
  }
}
