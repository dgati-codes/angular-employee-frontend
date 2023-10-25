import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../enviroments/enviroment";
import { Employee } from './employee';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl  = `${environment.baseUri}/employee`;

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/create`, employee);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/list`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${id}`);
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update`, employee);
  }
  modifyEmployeeName(id: number, newName: string): Observable<void> {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('newName', newName);

    return this.http.patch<void>(`${this.apiUrl}/edit`, null, { params });
  }
}
