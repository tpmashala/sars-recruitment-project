import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import { Employee } from '../../shared/models/Employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  displayedColumns: string[] = ['number', 'name', 'phone', 'email', 'edit', 'delete'];
  dataSource: [] = [];

  getEmployeeData(){
    this.employeeService.getAllEmployees().subscribe((res: [])=>{
        this.dataSource = res;
        console.log(res);
    });
  }

  updateEmployee(emp){
    this.employeeService.updateEmployee(emp.employee_id, emp).subscribe((res)=>{
      
    })
  }

  removeEmployee(emp){
    this.employeeService.deleteEmployee(emp.employee_id).subscribe((res)=>{
      
    })
  }
}
