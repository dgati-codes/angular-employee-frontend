import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent {

  employees: Employee[]=[];
  message: string= '';
  constructor(private service: EmployeeService, private router: Router){}

  ngOnInit(): void {
    this.fetchAllEmployees();
  }

  fetchAllEmployees() {
    this.service.getAllEmployees().subscribe(
      (data) => {
        if (data === null || data.length === 0) {
          this.message = "No Records Found";
        } else {
          this.employees = data;
        }
      },
      (error) => {
        console.error('Error fetching employees', error);
        this.message = "An error occurred while fetching employees.";
      }
    );
  }
  
  deleteEmployee(id: number) {
    this.service.deleteEmployee(id).subscribe(
      () => {
        this.message = "Employee deleted successfully.";
        this.fetchAllEmployees();
      },
      (error) => {
        console.error(error);
        this.message = "An error occurred while deleting the employee.";
      }
    );
  }

  editEmployee(id: number) {
    this.router.navigate(['edit',id]);
  }

}
