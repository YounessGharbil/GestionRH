import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthenticationResponse } from '../auth/responses/AuthenticationResponse';
import { User } from '../entities/User';
import { Role } from '../enums/Role';
import { UsersService } from '../users/users.service';
import { CreateRapportManagerRequest } from './requests/CreateRapportManagerRequest';
import { CreateRapportRhPlus1Request } from './requests/CreateRapportRhPlus1Request';
import { CreateRapportRhRequest } from './requests/CreateRapportRhRequest';
import { CreateRapportSuperviseurRequest } from './requests/CreateRapportSuperviseurRequest';
import { CreateRapportTeamLeaderRequest } from './requests/CreateRapportTeamLeaderRequest';

@Injectable({
  providedIn: 'root'
})
export class DemandesDeSanctionService implements OnInit {
  
  public authenticatedUser:AuthenticationResponse;

  constructor(
    private http: HttpClient,
    private  auth:AuthService,
    private usersService:UsersService,) { 
    this.authenticatedUser=auth.authenticatedUser;
  }
  ngOnInit(): void {
   
  }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('Authorization')}`,
      'username': `${localStorage.getItem('username')}`,
      'userRole': `${localStorage.getItem('userRole')}`,
      'department': `${localStorage.getItem('department')}`,
      'matricule': `${localStorage.getItem('matricule')}`,
      'site': `${localStorage.getItem('site')}`
    })
  };


   headersz = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/pdf'
  });

  private baseURL = `http://localhost:8080/demandeDeSanction`;

  getUserRole():string{
    return localStorage.getItem('userRole');
  }


  createRapportRhPlus1(createRapportRhPlus1Request:CreateRapportRhPlus1Request):Observable<any>{
    return this.http.post(`${this.baseURL}/rapportRhPlus1/create`,createRapportRhPlus1Request,this.httpOptions) ;

  }

  createRapportRh(createRapportRhRequest:CreateRapportRhRequest):Observable<any>{
    return this.http.post(`${this.baseURL}/rapportRh/create`,createRapportRhRequest,this.httpOptions) ;
  }


  createRapportManager(createRapportManagerRequest:CreateRapportManagerRequest):Observable<any>{
    return this.http.post(`${this.baseURL}/rapportManager/create`,createRapportManagerRequest,this.httpOptions) ;
  }


  createRapportSuperviseur(createRapportSuperviseurRequest:CreateRapportSuperviseurRequest):Observable<any>{
    return this.http.post(`${this.baseURL}/rapportSuperviseur/create`,createRapportSuperviseurRequest,this.httpOptions) ;
  }


  createRapportTeamLeader(createRapportTeamLeaderRequest:CreateRapportTeamLeaderRequest):Observable<any>{
    return this.http.post(`${this.baseURL}/rapportTeamLeader/create`,createRapportTeamLeaderRequest,this.httpOptions) ;
  }

  getRapportTeamLeader(id:number):Observable<any>{

    return this.http.get(`${this.baseURL}/rapportTeamLeader/get/${id}`) ;
  }

  getRapportSuperviseur(id:number):Observable<any>{

    return this.http.get(`${this.baseURL}/rapportSuperviseur/get/${id}`) ;
  }

  getRapportManager(id:number):Observable<any>{

    return this.http.get(`${this.baseURL}/rapportManager/get/${id}`) ;
  }

  getRapportRh(id:number):Observable<any>{

    return this.http.get(`${this.baseURL}/rapportRh/get/${id}`) ;
  }

  getRapportRhPlus1(id:number):Observable<any>{

    return this.http.get(`${this.baseURL}/rapportRhPlus1/get/${id}`) ;
  }

  getRapport(id:number):Observable<any>{

    return this.http.get(`${this.baseURL}/${this.getController()}/get/${id}`) ;
  }

  getRapportTeamLeaderByDemandeId(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/rapportTeamLeader/getByDemandeId/${id}`) ;
  }

  getRapportSuperviseurByDemandeId(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/rapportSuperviseur/getByDemandeId/${id}`) ;
  }

  getRapportManagerByDemandeId(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/rapportManager/getByDemandeId/${id}`) ;
  }

  getRapportRhByDemandeId(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/rapportRh/getByDemandeId/${id}`) ;
  }

  getRapportRhPlus1ByDemandeId(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/rapportRhPlus1/getByDemandeId/${id}`) ;
  }

  getRapportByDemandeId(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${this.getController()}/getByDemandeId/${id}`) ;
  }
  
  getDemandePdf(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/demandePdf/${id}`, { observe: 'response', responseType: 'blob' });

  }

  getAllDemandes():Observable<any>{
    return this.http.get(`${this.baseURL}/getAllDemandes`) ;
  }

  getDemande(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/get/${id}`) ;
  }

  
  getAllRapportTeamLeader():Observable<any>{
    return this.http.get(`${this.baseURL}/rapportTeamLeader/getAll`) ;
  }

  getRapportsTeamLeaderNotProcessed():Observable<any>{
    return this.http.get(`${this.baseURL}/rapportTeamLeader/getAllNotProcessed`) ;
  }

  getAllRapportSuperviseur():Observable<any>{
    return this.http.get(`${this.baseURL}/rapportSuperviseur/getAll`) ;
  }

  getRapportsSuperviseurNotProcessed():Observable<any>{
    return this.http.get(`${this.baseURL}/rapportSuperviseur/getAllNotProcessed`) ;
  }

  getAllRapportManager():Observable<any>{
    return this.http.get(`${this.baseURL}/rapportManager/getAll`) ;
  }

  getAllRapportRh():Observable<any>{
    return this.http.get(`${this.baseURL}/rapportRh/getAll`) ;
  }

  getAllRapportRhPlus1():Observable<any>{
    return this.http.get(`${this.baseURL}/rapportRhPlus1/getAll`) ;
  }

  getAllRapport():Observable<any>{
    return this.http.get(`${this.baseURL}/${this.getController()}/getAll`) ;
  }

 

  getController():string{
    console.log(localStorage.getItem('userRole'));
    switch (localStorage.getItem('userRole')) {
      case "ROLE_TEAM_LEADER":
        return "rapportTeamLeader";
      case "ROLE_SUPERVISEUR":
        return "rapportSuperviseur";
      case "ROLE_MANAGER":
        return "rapportManager";
      case "ROLE_RH":
        return "rapportRh";
      case "ROLE_RH_PLUS1":
        return "rapportRhPlus1";
      default:
        break;
    }
    return "i d k";
    
  }

 

}
