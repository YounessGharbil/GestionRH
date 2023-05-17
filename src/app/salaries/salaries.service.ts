import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateSalarieRequest } from './requests/CreateSalarieRequest';
import { UpdateSalarieResquest } from './requests/UpdateSalarieRequest';
import { SalariesModule } from './salaries.module';


@Injectable({
  providedIn: 'root'
})
export class SalariesService {
  private baseURL = `http://localhost:8080/salaries`;

  constructor(private http: HttpClient) { }

  createSalarie(createSalarieRequest:CreateSalarieRequest):Observable<any>{
    console.log(createSalarieRequest);
    return this.http.post(`${this.baseURL}/create`,createSalarieRequest)
  }
  // uploadSalaries( file:File):Observable<any>{
  //   return this.http.post(`${this.baseURL}/upload`,file)

  // }

  uploadSalariesExcel(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    const req = new HttpRequest('POST', `${this.baseURL}/upload`, formData, {
      headers: headers,
      reportProgress: true,
      responseType: 'json'});
    return this.http.request(req);
  }

  updateSalarie(updateSalarieResquest:UpdateSalarieResquest):Observable<any>{
    console.log(updateSalarieResquest);
    return this.http.put(`${this.baseURL}/update`,updateSalarieResquest)

  }
  deleteSalarie(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${id}`);

  }
  getSalarie(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/get/${id}`);

  }
  getAllSalaries():Observable<any>{
    return this.http.get(`${this.baseURL}/getAll`);
  }







}
