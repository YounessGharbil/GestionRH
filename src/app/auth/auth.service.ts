import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationRequest } from './requests/AuthenticationRequest';
import { AuthenticationResponse } from './responses/AuthenticationResponse';
import { DOCUMENT } from '@angular/common';
import { AuthModule } from './auth.module';
import { Role } from '../enums/Role';



@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private baseURL = `http://localhost:8080/auth`;
  public authenticatedUser:AuthenticationResponse;
  constructor(private http: HttpClient,@Inject(DOCUMENT) private document: any) {

   }
   isRhAuthenticated:boolean=false;
   isRhPlusAuthenticated:boolean=false;
   isTeamleaderAuthenticated:boolean=false;
   isManagerAuthenticated:boolean=false;
   isSuperviseurAuthenticated:boolean=false;
   isUserAuthenticated:boolean=false;
 
  
    
   authenticate(authReq:AuthenticationRequest ):Observable<any>{
    return this.http.post(`${this.baseURL}/authenticate`,authReq);
   }

   public setAuthenticatedUser(authenticatedUser:AuthenticationResponse):AuthenticationResponse{
    const storage = this.document.defaultView.localStorage;
    storage.setItem('Authorization', authenticatedUser.token);
    storage.setItem('username', authenticatedUser.username);
    storage.setItem('userRole', authenticatedUser.userRole);
    storage.setItem('matricule', authenticatedUser.matricule);
    storage.setItem('department', authenticatedUser.department);
    storage.setItem('site', authenticatedUser.site);
    storage.setItem('authenticatedUser',  JSON.stringify(authenticatedUser));
    this.authenticatedUser = authenticatedUser;
    // this.initializeUserRoles();
    return this.authenticatedUser=authenticatedUser;
      
   }
   public getAuthenticatedUser(): AuthenticationResponse {
    return this.authenticatedUser;
  }
   clearLocalStorage() {
    localStorage.clear();
    location.reload();
  }

   addHeaders(headers: HttpHeaders) {
    if (this.authenticatedUser) {
      
       headers.set('Authorization', `Bearer ${this.authenticatedUser.token}`);
       headers.set('username', `${this.authenticatedUser.username}`);
       headers.set('userRole', `${this.authenticatedUser.userRole}`);
       headers.set('matricule', `${this.authenticatedUser.matricule}`);
       headers.set('department', `${this.authenticatedUser.department}`);
       headers.set('site', `${this.authenticatedUser.site}`);
       return headers;

    }
    return headers;
  }
  
//   private initializeUserRoles() {
//     if (this.authenticatedUser) {
//       this.isRhPlusAuthenticated = this.authenticatedUser.userRole == Role.ROLE_RH_PLUS1;
//       this.isRhAuthenticated = this.authenticatedUser.userRole == Role.ROLE_RH;
//       this.isManagerAuthenticated = this.authenticatedUser.userRole == Role.ROLE_MANAGER;
//       this.isSuperviseurAuthenticated = this.authenticatedUser.userRole == Role.ROLE_SUPERVISEUR;
//       this.isTeamleaderAuthenticated = this.authenticatedUser.userRole == Role.ROLE_TEAM_LEADER;
//       this.isUserAuthenticated = this.isRhPlusAuthenticated || this.isRhAuthenticated || this.isManagerAuthenticated || this.isSuperviseurAuthenticated || this.isTeamleaderAuthenticated;
//     }

// }
}
