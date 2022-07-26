import { Injectable } from '@angular/core';
import { ApiFactoryService } from './api-factory.service';
import { Employee } from '../../shared/models/Employee';

const employeeBaseURL ="api/v1/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apiFactoryService: ApiFactoryService) { }

  getOneEmployee<Employee>(id: string) {
    return this.apiFactoryService.findOne<Employee>(
      `${employeeBaseURL}/${id}`
    );
  }

  getAllEmployees<Employee>() {
    return this.apiFactoryService.findAll<Employee>(`${employeeBaseURL}`);
  }

  addEmployee<Employee>(employee: Employee) {
    console.info("in add employee request api");
    console.info(employee);
    return this.apiFactoryService.post<Employee>(`${employeeBaseURL}/`,employee);
  }

  updateEmployee<Employee>(id: string, employee: Employee) {
    return this.apiFactoryService.patch<Employee>(`${employeeBaseURL}/${id}`, 
    employee);
  }

  deleteEmployee<Employee>(id: string) {
    return this.apiFactoryService.delete<Employee>(`${employeeBaseURL}/${id}`);
  }
}
