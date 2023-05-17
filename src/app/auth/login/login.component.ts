import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthenticationRequest } from '../requests/AuthenticationRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  constructor(private authservice:AuthService,private fb: FormBuilder,private router: Router){}
  ngOnInit(): void {
    if(localStorage.getItem('Authorization')!=null){
      this.navigateToGetAll();
    }
  }
  authenticationRequest:AuthenticationRequest;
  hide:any;
  regexPattern = /^(?=.*[A-Za-z])[A-Za-z\d@$!%*#?&]{6,10}$/;

  loginFormGroup: FormGroup = this.fb.group({
    email:['',[ Validators.required,Validators.email]],
    password:['', [Validators.required,Validators.maxLength(10),Validators.minLength(6), Validators.pattern(this.regexPattern)]],
  });
  

  onSubmit(){

    this.authenticationRequest={
      'email':this.loginFormGroup.value.email,
      'password':this.loginFormGroup.value.password,
     
    };
    this.authservice.authenticate(this.authenticationRequest).subscribe({
       next:(response)=>{
      if(this.authservice.setAuthenticatedUser(response)){
        this.navigateToGetAll();
        location.reload();
      }
      else{
        this.router.navigate(['/login']);
      }
      
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      console.log("task complete")
    }
    });
    
    
  }

  navigateToGetAll(){
    switch (localStorage.getItem('userRole')) {
      case "ROLE_TEAM_LEADER":
        this.router.navigate(['/demandes-de-sanction/getTeamLeaderRapports']);
        break;
      case "ROLE_SUPERVISEUR":
        this.router.navigate(['/demandes-de-sanction/getSuperviseurRapports']);
        break;
      case "ROLE_MANAGER":
        this.router.navigate(['/demandes-de-sanction/getManagerRapports']);
        break;
      case "ROLE_RH":
        this.router.navigate(['/demandes-de-sanction/getRhRapports']);
        break;
      case "ROLE_RH_PLUS1":
        this.router.navigate(['/demandes-de-sanction/getRhPlus1Rapports']);
        break;
      default:
        break;
    }
  }
  

}
