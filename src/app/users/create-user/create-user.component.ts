import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/enums/Role';
import { CreateUserRequest } from '../requests/CreateUserRequest';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  constructor(private usersService:UsersService,private fb: FormBuilder,private router:Router){
    
  }
  ngOnInit(): void {
  }
  createUserRequest:CreateUserRequest;
  hide:any;
  
  roleOptions = [
    { value: Role.ROLE_TEAM_LEADER, label: 'Team Leader' },
    { value: Role.ROLE_SUPERVISEUR, label: 'Superviseur' },
    { value: Role.ROLE_MANAGER, label: 'Manager' },
    { value: Role.ROLE_RH, label: 'RH' },
    { value: Role.ROLE_RH_PLUS1, label: 'RHPlus1' },
  ];

  userFormGroup: FormGroup = this.fb.group({
    matricule:['', Validators.required],
    username:['', Validators.required],
    password:['', Validators.required],
    userRole:['', Validators.required],
    
    
  });


 
  createUser(createUserRequest:CreateUserRequest){
    
    this.usersService.createUser(createUserRequest).subscribe({
      next:  (response)=>
      {
        this.router.navigate(['/users']);
  
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("task complete")
      }
    }
    
    );

  }
  onSubmit(){
    console.log(this.userFormGroup.value);
    this.createUserRequest={
      'matricule':this.userFormGroup.value.matricule,
      'email':this.userFormGroup.value.username,
      'password':this.userFormGroup.value.password,
      'role':this.userFormGroup.value.userRole,
    };
    this.createUser(this.createUserRequest);
    
  }

}
