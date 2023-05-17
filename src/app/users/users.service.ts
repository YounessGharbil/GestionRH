import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/User';
import { CreateUserRequest } from './requests/CreateUserRequest';
import { UpdateUserRequest } from './requests/UpdateUserRequest';
import { UsersModule } from './users.module';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  private baseURL = `http://localhost:8080/users`;

  constructor(private http: HttpClient) { }

  createUser(createUserRequest:CreateUserRequest):Observable<any>{
    return this.http.post(`${this.baseURL}/create`,createUserRequest)
  }


  updateUser(updateUserResquest:UpdateUserRequest):Observable<any>{
    return this.http.put(`${this.baseURL}/update`,updateUserResquest)

  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.baseURL}/delete/${id}`);

  }
  getUser(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/get/${id}`);

  }

  // getUserByMatricule(matricule:string):Observable<any>{
  //   return this.http.get(`${this.baseURL}/get/${matricule}`);

  // }

  getAllUsers():Observable<any>{
    return this.http.get(`${this.baseURL}/getAll`);
  }

  isSameSiteAndDepartement( user:User,superior:User):boolean{
    return user.department===superior.department && user.site.toString()===superior.site.toString()
  }





}
